importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDO1lzq-RlRvYpNnjSoEtFZFqW86-vOCLU",
  authDomain: "bhupendra-pwa.firebaseapp.com",
  projectId: "bhupendra-pwa",
  storageBucket: "bhupendra-pwa.firebasestorage.app",
  messagingSenderId: "852947519760",
  appId: "1:852947519760:web:e99c3e26c93912b8aa7d95"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body
  });
});
