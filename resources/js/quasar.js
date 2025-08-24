// resources/js/quasar.js

import { Quasar, Notify } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

export default {
    install: (app) => {
        app.use(Quasar, {
            plugins: {
                Notify,
            },
            config: {
                notify: { /* Konfigurasi default untuk Notifikasi */ },
            }
        });
    }
};
