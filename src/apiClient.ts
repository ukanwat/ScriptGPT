import axios from 'axios';
import openAIKey from './loadEnv'; // Import the API key from the centralized loader.

const apiClient = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${openAIKey}` // Use the imported API key.
  }
});

export default apiClient;
