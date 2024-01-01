"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// dotenv.config(); // Ensure environment variables are loaded at the start.
const openAIKey = process.env.OPENAI_API_KEY;
if (!openAIKey) {
    throw new Error('Failed to load OPENAI_API_KEY from .env file'); // INPUT_REQUIRED {Ensure the OPENAI_API_KEY is properly defined in the .env file}
}
// Export the API key for use in the application.
exports.default = openAIKey;
