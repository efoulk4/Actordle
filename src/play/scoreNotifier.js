class scoreEventNotifier {
    updates = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onmessage = async (message) => {
        try {
        const event = JSON.parse(await message.data.text());
        this.processEvent(event);
        }
        catch {}
        };
        }



      addHandler(handler) {
    this.handlers.push(handler);
  }

     removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
  }
    soundTheAlarm(event) {
        this.socket.send(JSON.stringify(event));
    }
    processEvent(event) {
        this.updates.push(event);
        if (this.updates.length > 2) {
            this.updates.shift();
        }
        this.handlers.forEach((handler) => handler(this.updates));
    }
}

const notifier = new scoreEventNotifier();
export { notifier };