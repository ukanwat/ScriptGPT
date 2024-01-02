import { IMessage } from "./IMessage";

export interface IChatRequest {
  model: string;
  max_tokens?: number;
  temperature?: number;
  messages: IMessage[];
  top_p?: number;
  n?: number;
  stream?: boolean;
  logprobs?: number;
  stop?: string | string[];
}
