// utils/stream.js
import { StreamChat } from 'stream-chat';

const apiKey = 'YOUR_API_KEY';

export const chatClient = StreamChat.getInstance(apiKey);

export const connectUser = async (userId, userToken) => {
  await chatClient.connectUser(
    {
      id: userId,
      name: 'User Name', // Replace with actual user name
      image: 'user-image-url', // Replace with actual user image URL
    },
    userToken
  );
};

export const disconnectUser = async () => {
  await chatClient.disconnectUser();
};
