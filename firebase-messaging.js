import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-messaging.js";

const messaging = getMessaging(app);

export async function initPush() {
  const permission = await Notification.requestPermission();

  if (permission !== "granted") {
    console.log("Notification permission denied");
    return;
  }

  const token = await getToken(messaging, {
    vapidKey: "BPrKV8gDtcYj4t5tTIL5hFZipYYq-8pXj-T60GCC7Wi8FkbdxB3A1C9k6E85H731JoHTrzMy6_zpkk346eN_Gpg"
  });

  console.log("FCM Token:", token);
}
