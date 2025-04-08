import { registerSW } from 'virtual:pwa-register';

registerSW({
  onRegistered(r) {
    console.log('Service Worker registered', r);
  },
  onRegisterError(err) {
    console.error('Service Worker registration failed', err);
  },
});
