// src/webSocketServer.ts
import WebSocket from 'ws';
import mqttHandler from './mqttClient';

const startWebSocketServer = (server: any) => {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('Client connected to WebSocket');

        ws.on('close', () => {
            console.log('Client disconnected from WebSocket');
        });
    });


    mqttHandler.on('message', (message: string) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    console.log('WebSocket server is running');
};

export default startWebSocketServer;
