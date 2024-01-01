const buildPromptString = (description: string, inputTypes: any[], outputType: any): string => {


  var typeDescription = "Input Types:\n"

  typeDescription = typeDescription + inputTypes.map((inputType, index) => {
    return `Input Type ${index + 1}: ${inputType.type ?? 'any'}${inputType.description == null ? "" : `\ndescription: ${inputType.description}`}\n\n`;
  });

  typeDescription = typeDescription + "\n\nOutput Type: " + outputType;






  return `Create a JavaScript function based on the following requirements:\n\n${description}\n\n${typeDescription}`;
};

export default buildPromptString;
