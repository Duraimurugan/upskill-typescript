/**
 * Both types and interface are used to declare the shape of something (object)
 * Interface and Type can be used interchangeably
 * intersection is allowed in both Interface and Type
 * Union is allowed only in Type and not in Interface because the shape for Interface
 * have to be locked during declaration
 */

interface IPet {
    pose(): void;
}

interface IFeline {
    nightvision: boolean;
}

type Cat = IPet & IFeline;  // can be done in single line

interface ICat extends IPet, IFeline { // functionally they are same but the difference is with lexical

}

// Major difference
// type: Union of multiple other types is allowed
// interface: TSC does not allow to do that

interface IDog {}
interface ICat {}

type PetType = IDog | ICat;     // Union of multiple other types

interface IPet extends PetType {    // TSC wont allow this
    // because interface is a specific contract
    // we cannot have this or that.
}

class IPet extends PetType { // TSC wont allow

}
