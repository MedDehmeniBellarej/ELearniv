// components/StreamChatComponent.js
"use client";
import React, { useEffect, useState } from "react";
import { StreamChat } from 'stream-chat';
import { 
  Chat,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Window,
  Thread,
  LoadingIndicator 
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY; // Use environment variable for API key

const user = {
  id: '6', // Replace with actual user ID
  name: 'John Doe', // Replace with actual user name
  image: 'https://res.cloudinary.com/dev-empty/image/upload/v1712139903/typ3uhxza7v9wv5w48ch.jpg', // Replace with actual user image URL
};

const chatClient = StreamChat.getInstance(apiKey);

const fetchToken = async (userId) => {
  try {
    const response = await fetch(`/api/token/${userId}`);
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error fetching token:', error);
  }
};

const CourseChatChannelComponent = ({ channelId }) => {
  const [userToken, setUserToken] = useState(null);
  const [channel, setChannel] = useState(null);
  const userId = user.id;

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const token = await fetchToken(userId);
        console.log('Fetched token:', token);
        setUserToken(token);

        await chatClient.connectUser(user, token);
        console.log('User connected');

        const newChannel = chatClient.channel('messaging', channelId, {
          name: 'Course Chat Channel',
        });
        await newChannel.watch();
        console.log('Channel created and watched:', newChannel);
        setChannel(newChannel);
      } catch (error) {
        console.error('Error initializing chat:', error);
      }
    };

    initializeChat();

    return () => {
      chatClient.disconnectUser();
    };
  }, [userId, channelId]);

  if (!userToken || !channel) return <div>Loading...</div>;

  return (
    <div>
      <Chat client={chatClient} theme="messaging light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
};

export default CourseChatChannelComponent;
