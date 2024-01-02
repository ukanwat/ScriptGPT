const buildPromptString = (description: string, spec: any): string => {


  // var typeDescription = "Input Types:\n"

  // typeDescription = typeDescription + inputTypes.map((inputType, index) => {
  //   return `Input Type ${index + 1}: ${inputType.type ?? 'any'}${inputType.description == null ? "" : `\ndescription: ${inputType.description}`}\n\n`;
  // });

  // typeDescription = typeDescription + "\n\nOutput Type: " + outputType;






  return `Description:\n${description}\nSpecification:\n${JSON.stringify(spec)}\n`;
};

export default buildPromptString;
