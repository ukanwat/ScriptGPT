export interface FunctionSpec {
    name: string;
    description: string;
    return: string;
    parameters: Parameter[];
}

interface Parameter {
    name: string;
    type: string;
}