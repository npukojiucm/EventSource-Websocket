import Chat from './Chat';

const chat = new Chat('.container', 'ws://localhost:8080');

chat.init();
