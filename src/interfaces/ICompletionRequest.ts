export default interface ICompletionRequest {
  prompt: string;
  max_tokens: number;
  temperature?: number;
  top_p?: number;
  n?: number;
  stream?: boolean;
  logprobs?: number;
  stop?: string | string[];
}
