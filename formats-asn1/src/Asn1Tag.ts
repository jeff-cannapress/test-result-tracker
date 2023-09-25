// from https://github.com/dotnet/runtime/blob/main/src/libraries/System.Formats.Asn1/src/System/Formats/Asn1/Asn1Tag.cs

import UniversalTagNumber from './UniversalTagNumber';
import TagClass from './TagClass';
export class Asn1Tag {
    private static readonly ClassMask = 0b1100_0000;
    private static readonly ConstructedMask = 0b0010_0000;
    private static readonly ControlMask = 0b1100_0000 | 0b0010_0000;
    private static readonly TagNumberMask = 0b0001_1111;

    private readonly _controlFlags: number;

    /// <summary>
    ///   The tag class to which this tag belongs.
    /// </summary>
    public get tagClass(): number { return (this._controlFlags & Asn1Tag.ClassMask); }

    /// <summary>
    ///   Indicates if the tag represents a constructed encoding (<see langword="true"/>), or
    ///   a primitive encoding (<see langword="false"/>).
    /// </summary>
    public get isConstructed(): boolean { return ((this._controlFlags & Asn1Tag.ConstructedMask) != 0); }


    private constructor(controlFlags: number, public readonly tagValue: number) {
        this._controlFlags = (controlFlags & Asn1Tag.ControlMask);
    }

    /// <summary>
    ///   Create an <see cref="Asn1Tag"/> for a tag from the UNIVERSAL class.
    /// </summary>
    /// <param name="universalTagNumber">
    ///   One of the enumeration values that specifies the semantic type for this tag.
    /// </param>
    /// <param name="isConstructed">
    ///   <see langword="true"/> for a constructed tag, <see langword="false"/> for a primitive tag.
    /// </param>
    /// <exception cref="ArgumentOutOfRangeException">
    ///   <paramref name="universalTagNumber"/> is not a known value.
    /// </exception>
    public static universal(universalTagNumber: number, isConstructed: boolean = false): Asn1Tag
    //: this
    {
        // T-REC-X.680-201508 sec 8.6 (Table 1)
        const ReservedIndex = 15;

        if (universalTagNumber < UniversalTagNumber.EndOfContents ||
            universalTagNumber > UniversalTagNumber.RelativeObjectIdentifierIRI ||
            universalTagNumber == ReservedIndex) {
            throw new Error(`universalTagNumber is out of range`);
        }
        return new Asn1Tag(isConstructed ? Asn1Tag.ConstructedMask : 0, universalTagNumber);
    }

}