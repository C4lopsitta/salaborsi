import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { initializeAuth, browserLocalPersistence, indexedDBLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
   //add config
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = initializeAuth(app, {persistence: [browserLocalPersistence, indexedDBLocalPersistence]});


