// Importing the StreamChat class from the stream-chat package.
import { StreamChat } from 'stream-chat';

// Setting up the Stream Chat server client with the API key and secret.
const apiKey = 'dy3xky9ybjte';
const apiSecret = 'qrq2s9pfkvrhzb2j9wfugnyt2c9836jpgzx892kfrck6a6xzrb4c2e7u9nvy79fe';
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
