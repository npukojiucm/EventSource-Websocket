import Chat from './Chat';

const chat = new Chat('.container', 'ws://websocket-server-ugmt.onrender.com');

chat.init();
