// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

/**
 * 1.firebase-tools (one time)
 * 2. firebase login (one time)
 * 3. one time for each project : firebase init
 * 4. What do you want to do: select hosting
 * 5. select a project (already have one created in firebase console)
 * 6. what will be you publicL dist
 * 7. single page application: y
 * ------------
 * ## each time you want to deploy
 * 8. npm run build
 * 9. firebase deploy
 *
 */
