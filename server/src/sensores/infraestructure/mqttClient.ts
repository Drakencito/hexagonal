// mqttClient.ts
import mqtt, { MqttClient } from 'mqtt';
import { EventEmitter } from 'events';


const MQTT_BROKER_URL = 'mqtt://broker.emqx.io';
const TOPIC = 'entrada/01';


class MqttHandler extends EventEmitter {
    private client: MqttClient;

    constructor() {
        super();
        this.client = mqtt.connect(MQTT_BROKER_URL);
        this.client.on('connect', this.onConnect.bind(this));
        this.client.on('message', this.onMessage.bind(this));
    }

    private onConnect(): void {
        console.log('Connected to MQTT broker');
        this.client.subscribe(TOPIC, (err) => {
            if (err) {
                console.error(`Failed to subscribe to topic ${TOPIC}:`, err);
            } else {
                console.log(`Subscribed to topic: ${TOPIC}`);
            }
        });
    }

    private onMessage(topic: string, message: Buffer): void {
        console.log(`Message received on topic ${topic}: ${message.toString()}`);
        this.emit('message', message.toString());
    }
}

export default new MqttHandler();
