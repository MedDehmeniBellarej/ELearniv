// Importing the StreamChat class from the stream-chat package.
import { StreamChat } from 'stream-chat';

// Setting up the Stream Chat server client with the API key and secret.
const apiKey = '5hsaqrh4njww';
const apiSecret = '4a4jjtgwb3h8u4ephxnk9t2f3ff9cxehdzkg2bf64zjz7ggtd8qsmkarkrp69kd5';
const serverClient = StreamChat.getInstance(apiKey, apiSecret);

// Exporting the default API handler function.
export async function GET(request, { params }) {
  const { userId } = params;

  if (!userId) {
    return new Response(JSON.stringify({ error: 'Missing userId' }), { status: 400 });
  }

  const token = serverClient.createToken(userId);
  return new Response(JSON.stringify({ token }), { status: 200 });
}
