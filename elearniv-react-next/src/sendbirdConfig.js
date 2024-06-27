// src/sendbirdConfig.js
import { SendbirdChat } from '@sendbird/chat';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';

const APP_ID = 'EE979E61-9591-46BD-A124-230677164281'; // Replace with your Sendbird App ID

const sb = SendbirdChat.init({
  appId: APP_ID,
  modules: [new GroupChannelModule()],
});

export default sb;
