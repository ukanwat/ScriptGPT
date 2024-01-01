"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const buildPromptString = (description, inputTypes, outputType) => {
    // const examples = inputs.map((input, index) => {
    //   const output = outputs[index];
    //   return `Example:\nInput: ${input}\nOutput: ${output}\n\n`;
    // }).join('\n\n');
    var typeDescription = "Input Types:\n";
    typeDescription = typeDescription + inputTypes.map((inputType, index) => {
        return `Input Type ${index + 1}: ${inputType.type}\ndescription: ${inputType.description}\n\n`;
    });
    typeDescription = typeDescription + "\n\nOutput Type: " + outputType;
    return `Create a JavaScript function based on the following requirements:\n\n${description}\n\n${typeDescription}`;
};
exports.default = buildPromptString;
