"use client";
import React, { useEffect, useState } from "react";
import { StreamChat } from 'stream-chat';
import { 
  Chat,
  Channel,
  ChannelHeader,
  MessageList,
  MessageInput,
  Window
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import './style.css'; // Import your custom styles

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const chatClient = StreamChat.getInstance(apiKey);

const fetchToken = async (userId) => {
  try {
    const response = await fetch(`/api/token/${userId}`);
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error; // Rethrow to handle in the calling function
  }
};

const CourseChatChannelComponent = ({ currentUser, channelId }) => {
  const [userToken, setUserToken] = useState(null);
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = {
    id: String(currentUser.id),
    name: currentUser.name,
    image: currentUser.image,
  };

  useEffect(() => {
    const initializeChat = async () => {
      try {
        console.log('Initializing chat for user:', user);

        const token = await fetchToken(user.id);
        console.log('Fetched token:', token);
        setUserToken(token);

        // Check if the user is already connected before calling connectUser
        if (!chatClient.user || chatClient.user.id !== user.id) {
          await chatClient.connectUser(user, token);
          console.log('User connected');
        }

        const existingChannel = chatClient.channel('messaging', channelId ,
          {
            name: "Course Chat",
            image: "Course Chat",
          }
        );
        
        // Check if the user is already a member before adding
        const channelState = await existingChannel.query();
        const isMember = channelState.members.some(member => member.user_id === user.id);

        if (!isMember) {
          await existingChannel.addMembers([user.id]);
        }

        await existingChannel.watch();
        console.log('Channel fetched and watched:', existingChannel);
        setChannel(existingChannel);
      } catch (error) {
        console.error('Error initializing chat:', error);
      } finally {
        setLoading(false); // Ensure loading is set to false regardless of success or failure
      }
    };

    initializeChat();

    return () => {
      console.log('Cleaning up chat client');
      chatClient.disconnectUser();
    };
  }, [user.id, channelId]);

  if (loading) return <div>Loading...</div>;
  if (!userToken || !channel) return <div>Error initializing chat. Please try again later.</div>;

  const CustomClasses = {
    chat: 'custom-padding-zero ',
    channel: 'custom-channel-class',
    
  };

  return (
    <div className="chat-wrapper">
      <Chat client={chatClient} theme="messaging light"  > 
          <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList  />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
};

export default CourseChatChannelComponent;