import _firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDZ8JcB7FtwWxqKT9irbqXk2pS7bs2D_fc',
  authDomain: 'fcode-k16.firebaseapp.com',
  databaseURL: 'https://fcode-k16.firebaseio.com',
  projectId: 'fcode-k16',
  storageBucket: 'fcode-k16.appspot.com',
  messagingSenderId: '761414295095',
  appId: '1:761414295095:web:facb599f53aa8286fc69b2',
};
_firebase.initializeApp(firebaseConfig);
export const auth = _firebase.auth();
export const firebase = _firebase;
export const database = _firebase.database();
export const provider = new _firebase.auth.GoogleAuthProvider();
