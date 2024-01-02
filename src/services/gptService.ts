import axios from 'axios';
import { IMessage } from '../interfaces/IMessage';
import apiClient from '../apiClient';
import { parseCodeFromResponse } from '../utils/parseCodeFromResponse';


import openAIKey from 'loadEnv';
import { IChatRequest } from 'interfaces/IChatRequest';
import buildPromptString from 'utils/buildPromptString';







const generateCodeWithGPT4 = async (prompt: string, functionName: string, isTypescript: boolean): Promise<string> => {
  var language = isTypescript ? 'Typescript' : 'Javascript';
  try {





    const data: IChatRequest = {
      model: 'gpt-4',
      messages: [



        { role: "system", content: `You are an experienced ${language} programmer.` },
        { role: "system", content: "When asked to write code, you should first plan the structure of the code, then list the things you need to code, and finally return the code." },
        { role: "system", content: `You should also export a specific function according to specification given by the user.\nuse upticks '\`\`\`${language.toLowerCase()}' and '\`\`\`' for start and end code markers. The name of the function you should be '${functionName}'` },
        {
          role: "user", content: buildPromptString(`It takes an array of numbers and returns their sum.`, JSON.stringify(
            { name: 'sumArray', parameters: [{ name: "numbers", type: "number[]" }], returnType: "number" }))
        },
        { role: "assistant", content: `First, I'll plan the structure of the function. It will be a function named 'sumArray' that takes an array of numbers as an argument. It will use the reduce method to calculate the sum of the numbers in the array. Finally, it will return the sum.\nHere are the things I need to code: \n1. Function declaration for 'sumArray' \n2. Use of the 'reduce' method on the input array \n3. Return statement for the sum.\n\n\`\`\`${language.toLowerCase()}export function sumArray(numbers: number[]): number {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\`\`\`` },
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
