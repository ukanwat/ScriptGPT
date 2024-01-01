import axios from 'axios';
// import { IMessage } from '../interfaces/IMessage';
import apiClient from '../apiClient';
import { parseCodeFromResponse } from '../utils/parseCodeFromResponse';

const generateCodeWithGPT4 = async (prompt: string, functionName: string, isTypescript: boolean): Promise<string> => {
  var language = isTypescript ? 'Typescript' : 'Javascript';
  try {
    const data = {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are a ${language} code assistant.`,
        },
        {
          role: 'user',
          content: `Please write ${language} code that accomplishes the following task: ${prompt} Provide only the code, without any additional text or explanations. use upticks '\`\`\`${language.toLowerCase()}' and '\`\`\`' for start and end code markers. The name of the function you output should be '${functionName}'.`,
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
