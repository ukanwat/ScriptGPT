"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const loadEnv_1 = __importDefault(require("./loadEnv")); // Import the API key from the centralized loader.
const apiClient = axios_1.default.create({
    baseURL: 'https://api.openai.com/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loadEnv_1.default}` // Use the imported API key.
    }
});
exports.default = apiClient;
