import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../environments/firebase.config';

let app: FirebaseApp | undefined;

export function getFirebaseApp(): FirebaseApp {
  if (!app) {
    app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  }
  return app;
}
