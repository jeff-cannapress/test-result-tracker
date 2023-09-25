export default class ArgumentOutOfRangeException extends Error{
    private static buildMessage(parameterName:string):string{
        return "";
    }
    public constructor(parameterName:string, ){
        super(ArgumentOutOfRangeException.buildMessage())
    }
}