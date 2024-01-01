export interface IMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}
