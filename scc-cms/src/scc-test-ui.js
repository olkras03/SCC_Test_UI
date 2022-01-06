import { SccTestUi } from './SccTestUi.js';
import { Client } from '@stomp/stompjs';
setTimeout(() => {
  const client = new Client({
    brokerURL: 'ws://localhost:15674/ws',
    connectHeaders: {
      login: 'guest',
      passcode: 'guest',
    },
    debug: function (str) {
      console.log(str);
    }
  });

  client.onConnect = function (frame) {
    console.log(frame);
    setInterval(() => {
      client.publish({ destination: '/topic/general', body: 'Hello world' });
    }, 100);

    var subscription = client.subscribe('/queue/test', (frame) => {
      console.log(frame, 'Message loopback')
    });
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect
  };

  client.onStompError = function (frame) {
    // Will be invoked in case of error encountered at Broker
    // Bad login/passcode typically will cause an error
    // Complaint brokers will set `message` header with a brief message. Body may contain details.
    // Compliant brokers will terminate the connection after any error
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
  };

  client.activate();



}, 0)



customElements.define('scc-test-ui', SccTestUi);
