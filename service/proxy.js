const { WebSocketServer, WebSocket } = require('ws');

function setupWebSocket(httpServer) {
  const wss = new WebSocketServer({ server: httpServer });

    wss.on('connection', (socket) => {
        socket.isAlive = true;

        socket.on('message', function message(data){
            wss.clients.forEach((client) => {
                if (client != socket && client.readyState == WebSocket.OPEN){
                    client.send(data)
                }
            });
        });


        socket.on('pong'), () => {
            socket.isAlive = true;
        }

    });

    setInterval(() => {
    socketServer.clients.forEach(function each(client) {
      if (client.isAlive === false) return client.terminate();

      client.isAlive = false;
      client.ping();
    });
  }, 10000);
}

module.exports = {
    setupWebSocket
};
