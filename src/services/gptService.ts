import axios from 'axios';
import { IMessage } from '../interfaces/IMessage';
import apiClient from '../apiClient';
import { extractLibraries, parseCodeFromResponse } from '../utils/parseCodeFromResponse';

import openAIKey from 'loadEnv';
import { IChatRequest } from 'interfaces/IChatRequest';
import buildPromptString from 'utils/buildPromptString';
import inquirer from 'inquirer';
import { installLibrary } from 'tools/install';






const generateCodeWithGPT4 = async (prompt: string, functionName: string, isTypescript: boolean): Promise<string> => {
  var language = isTypescript ? 'Typescript' : 'Javascript';
  try {
    const data: IChatRequest = {
      model: 'gpt-4',
      messages: [
        { role: "system", content: `As a adept ${language} programmer, you generate code based on user-provided description and specification` },
        { role: "system", content: "When composing code, employ a structured approach. Begin by outlining the code's structure, identify the essential components, and conclude with the actual code implementation. If during your planning phase you recognize the need for popular libraries, include their names with optional versions, prefixed by (`INSTALL:) and suffixed by (`) anywhere outside code blocks. For instance, both INSTALL:lodash and INSTALL:lodash@4.17.21 are valid formats. This practice will automatically handle library installations." },
        { role: "system", content: `You should also export a specific function according to specification given by the user.\nuse upticks '\`\`\`${language.toLowerCase()}' and '\`\`\`' for start and end code markers. The name of the function you should be '${functionName}'` },
        {
          role: "user", content: buildPromptString(`It takes an array of numbers and returns their sum.`, JSON.stringify(
            { name: 'sumArray', parameters: [{ name: "numbers", type: "number[]" }], returnType: "number" }))
        },
        { role: "assistant", content: `First, I'll plan the structure of the function. It will be a function named 'sumArray' that takes an array of numbers as an argument. I'll leverage the 'sum' function from the lodash library (\`INSTALL:lodash\`) to calculate the sum of the numbers in the array. Finally, it will return the sum.\nHere are the things I need to code: 1. Function declaration for 'sumArray' 2. Use of the 'sum' function from the lodash library on the input array 3. Return statement for the sum. \n\n\`\`\`${language.toLowerCase()}import _ from 'lodash';\nexport function sumArray(numbers: number[]): number {\nreturn _.sum(numbers);\n}\n\`\`\`` },
        {
          role: 'user',
          content: `${prompt}`,
        },
      ],
      temperature: 0,
    };









    const response = await apiClient.post('/chat/completions', data);

    if (response.data.choices && response.data.choices.length > 0) {
      const choice = response.data.choices[0];
      if (choice && choice.message && choice.message.content) {



        const libsToInstall: string[] = extractLibraries(choice.message.content, 'INSTALL');


        if (libsToInstall.length > 0)
          await inquirer
            .prompt([
              {
                type: 'confirm',
                name: 'install',
                message: `Press ENTER to install required libraries (${libsToInstall.join(', ')}) now, or press any other key to skip and install them manually later`,
                default: true,
              },
            ])
            .then((answers) => {
              if (answers.install) {

                for (const lib of libsToInstall) {
                  installLibrary(lib);
                }
              } else {
                // Continuing without installing libraries
              }
            })
            .catch((error) => {
              console.error('Error occurred:', error);
            });



        return parseCodeFromResponse(choice.message.content, language);
      }
    }
    return 'No code generated.';
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error response:', error.response);
      throw new Error(`An error occurred while communicating with the GPT-4 API: ${error.message}`);
    } else {
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred.');
    }
  }
};

export default generateCodeWithGPT4;
