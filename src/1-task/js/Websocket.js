import { io } from 'socket.io-client';

export default class WebsocketClient {
  constructor(token) {
    this.client = io('http://localhost:3000', {
      auth: {
        token,
      },
    });

    this.client.on('connect', () => console.log('connect'));
    this.client.on('send_server_message', msg => console.log(msg));

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(message) {
    this.client.emit('client_user_msg', message);
  }
}
