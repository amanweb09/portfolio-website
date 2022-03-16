import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";

export default () => {
    const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: "portfolio-3a4eb",
        storageBucket: "portfolio-3a4eb.appspot.com",
        messagingSenderId: "926191740831",
        appId: "1:926191740831:web:72f1f714b3f75ed546ffaa",
        measurementId: "G-SCKQHRLLR0"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}