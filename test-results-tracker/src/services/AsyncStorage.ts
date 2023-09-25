export type AsyncStorage = {
    clear(): Promise<void>;
    getItem(key: string): Promise<string | null>;
    key(index: number): Promise<string | null>;
    length(): Promise<number>;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: string): Promise<void>;
    allKeys(): Promise<string[]>;
}

export class AsyncStorageWrapper implements AsyncStorage  {
    public constructor(private inner: Storage) { }
    clear(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.inner.clear();
            resolve(undefined);
        });
    }
    getItem(key: string): Promise<string | null> {
        return new Promise((resolve, reject) => {
            resolve(this.inner.getItem(key));
        });
    }
    key(index: number): Promise<string | null> {
        return new Promise((resolve, reject) => {
            resolve(this.inner.key(index));
        });
    }
    length(): Promise<number> {
        return new Promise((resolve, reject) => {
            resolve(this.inner.length);
        });
    }
    removeItem(key: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.inner.removeItem(key);
            resolve(undefined);
        });
    }
    setItem(key: string, value: string): Promise<void> {
        return new Promise((resolve, reject) => {
            if (key === null || key === "" || key === undefined) {
                reject(new Error(`key must not be null/empty/undefined`));
            }
            try {
                this.inner.setItem(key, value);
                resolve(undefined);
            }
            catch (ex) {
                reject(ex);
            }
        });
    }
    allKeys(): Promise<string[]> {
        return new Promise((resolve, reject) => {
            const keys = Array.from({ length: this.inner.length }, (value, index) => index)
                .map(i => this.inner.key(i) as string)
                .filter(k => k != null);
            resolve(keys);
        })

    }
}
