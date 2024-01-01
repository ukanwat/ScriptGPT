"use strict";
// import 'reflect-metadata';
// import appRoot from 'app-root-path';
// var functions = new Map<string, any>();
// function AnytoString(value: any) {
//     if (typeof value === 'string' || value instanceof String) {
//         // Already a string, no conversion needed
//         return value;
//     } else if (typeof value === 'symbol') {//TODO: check if this is needed
//         return value.toString(); // Unique symbol representation
//     } else if (typeof value === 'object') {
//         try {
//             return JSON.stringify(value); // Preferred for structured data
//         } catch (error) {
//             // Handle potential errors with JSON.stringify
//             return Object.prototype.toString.call(value); // Basic object type
//         }
//     } else {
//         // Handle unexpected types (e.g., custom classes)
//         return String(value); // Fallback to generic string conversion
//     }
// }
// export class FunctionCreator {
//     static registeredInstances = new Set<Map<string, any>>();
//     static functions = new Map<string, any>();
//     private name: string;
//     private description: string;
//     private inputTypes: any[];
//     private outputType: any;
//     static registerInstance(instance: any) {
//         FunctionCreator.registeredInstances.add(instance);
//     }
//     static registerFunctions(instance: Map<string, any>) {
//         FunctionCreator.functions = instance;
//     }
//     constructor(
//         name: string,
//         description: string,
//         inputTypes: any[],
//         outputType: any
//     ) {
//         this.name = name;
//         this.description = description;
//         this.inputTypes = inputTypes;
//         this.outputType = outputType;
//         FunctionCreator.registerInstance({
//             "name": this.name,
//             "description": this.description,
//             "inputTypes": this.inputTypes,
//             "outputType": this.outputType,
//         });
//     }
//     public createFunction(): (...args: any[]) => any {
//         this.inputTypes = this.inputTypes.map((type) => AnytoString(type));
//         this.outputType = AnytoString(this.outputType);
//         return (...args: any[]) => {
//             return FunctionCreator.functions.get(this.name)(...args);
//         };
//     }
// }
// // Usage:
// FunctionCreator.registerFunctions(functions);
// const customfn = new FunctionCreator('add', 'function adds two integers and return the values', ['int', 'int'], 'int');
