import 'dotenv/config'

const openAIKey = process.env.OPENAI_API_KEY;

if (!openAIKey) {
  throw new Error('Failed to load OPENAI_API_KEY from .env file'); // INPUT_REQUIRED {Ensure the OPENAI_API_KEY is properly defined in the .env file}
}

export default openAIKey;
