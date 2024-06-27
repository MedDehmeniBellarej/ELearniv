// chatClient.js
import { StreamChat } from 'stream-chat';

const chatClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_API_KEY);
export default chatClient;
