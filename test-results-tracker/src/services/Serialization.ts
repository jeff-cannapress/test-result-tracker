import { TestResult, Lab } from "./Models";

class SerializerBuffer {
    private segments: Uint8Array[] = [];
    private encoder = new TextEncoder();
    public appendUint8(value: number): SerializerBuffer {
        const buffer = new ArrayBuffer(1);
        new DataView(buffer).setUint8(value, 0);
        this.segments.push(new Uint8Array(buffer));
        return this;
    }
    public appendUint32(value: number): SerializerBuffer {
        const buffer = new ArrayBuffer(4);
        new DataView(buffer).setUint32(value, 0, false);
        this.segments.push(new Uint8Array(buffer));
        return this;
    }
    public appendFloat64(value: number): SerializerBuffer {
        const buffer = new ArrayBuffer(8);
        new DataView(buffer).setFloat64(value, 0, false);
        this.segments.push(new Uint8Array(buffer));
        return this;
    }
    public appendString(text: string): SerializerBuffer {
        if (text === null || text === undefined) {
            text = "";
        }
        const textData = this.encoder.encode(text);
        this.appendUint32(textData.length);
        this.segments.push(textData);
        return this;
    }
    public appendBuffer(buffer: Uint8Array): SerializerBuffer {
        this.segments.push(buffer);
        return this;
    }
    public append(that: SerializerBuffer): SerializerBuffer {
        for (let i = 0; i < that.segments.length; i++) {
            this.segments.push(that.segments[i]);
        }
        return this;
    }
    public get length(): number {
        return this.segments.reduce((a, c) => a + c.length, 0);
    }
    // public get data(): Uint8Array {
    //     const resultBuffer = new ArrayBuffer(this.length);
    //     const result = new Uint8Array(resultBuffer);
    //     let offset = 0;
    //     for (let i = 0; i < this.segments.length; i++) {
    //         let subBuffer = this.segments[i];
    //         result.set(subBuffer, offset);
    //         offset += subBuffer.length;
    //     }
    //     return result;
    // }
    public asStream(): ReadableStream {
        const segments = this.segments;
        return new ReadableStream({
            start(controller: ReadableStreamDefaultController) {
                for (let i = 0; i < segments.length; i++) {
                    controller.enqueue(segments[i]);
                }
                controller.close();
            },
        });
    }
}




export class LabSerializer {

    public static async serialize(lab: Lab) {

        const stream = LabSerializer.serializeLab(lab).asStream();
        const dataBuffer = await new Response(stream.pipeThrough(new CompressionStream("gzip"))).arrayBuffer();
        const asciiData = (new Uint8Array(dataBuffer)).map(b => String.fromCharCode(b) as any).join('');
        const b64 = btoa(asciiData).replace('+', '-').replace('/', '_');
        return b64;
    }
    public static async dezerialize(sharedData: string) {
        const bytesString = atob(sharedData.replace('-', '+').replace('_', '/'));
        const compressedBytes = new Uint8Array(new ArrayBuffer(bytesString.length));
        for (let i = 0; i < bytesString.length; i++) {
            compressedBytes[i] = bytesString.charCodeAt(i);
        }
        const stream = new ReadableStream({
            start(controller) {
                controller.enqueue(compressedBytes);
                controller.close();
            },
        });
        const dataBuffer = await new Response(stream.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();

        throw new Error("todo:decode");
    }
    private static serializeLab(lab: Lab): SerializerBuffer {
        if (lab.notes === null || lab.notes === undefined) {
            lab.notes = "";
        }
        const buffer = new SerializerBuffer();

        const encodedDate = (lab.date.getFullYear() * 10000) + ((lab.date.getMonth() + 1) * 100) + (lab.date.getDate());
        buffer.appendUint32(encodedDate);
        buffer.appendUint8(lab.fasted ? 1 : 0);
        buffer.appendString(lab.notes);
        const encodedEntries = lab.results.map(e => LabSerializer.serializeResult(e));
        buffer.appendUint32(encodedEntries.length);
        for (let i = 0; i < encodedEntries.length; i++) {
            buffer.appendUint32(encodedEntries[i].length);
        }
        for (let i = 0; i < encodedEntries.length; i++) {
            buffer.append(encodedEntries[i]);
        }

        return buffer;
    }
    private static serializeResult(entry: TestResult): SerializerBuffer {
        const buffer = new SerializerBuffer();
        buffer.appendUint32(entry.testId);
        buffer.appendFloat64(entry.value);
        buffer.appendString(entry.comment);

        return buffer;
    }


}