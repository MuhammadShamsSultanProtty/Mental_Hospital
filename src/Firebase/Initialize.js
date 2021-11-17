import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyARr2Tb3JCyMc1lf3ZzPmSNmbGqMgiOp54",

  authDomain: "hospital-e1f79.firebaseapp.com",

  projectId: "hospital-e1f79",

  storageBucket: "hospital-e1f79.appspot.com",

  messagingSenderId: "499143834011",

  appId: "1:499143834011:web:2cbecd8364385a7686493e"

};

const initializeAuth = () => {
  initializeApp(firebaseConfig);
  getAnalytics(initializeApp(firebaseConfig));
}

export default initializeAuth;