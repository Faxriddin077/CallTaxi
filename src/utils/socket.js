import VueSocketIO from 'vue-3-socket.io';
import SocketIO from 'socket.io-client';

export default function io(store, url = process.env.VUE_APP_SOCKET_URL) {
    return new VueSocketIO({
        connection: SocketIO(url, {
            transports: ['websocket', 'polling'],
            secure: true
        }),
        vuex: {
            store,
            // actionPrefix: 'SOCKET_',
            // mutationPrefix: 'SOCKET_'
        },
        options: {path: "/"}
    });
}
