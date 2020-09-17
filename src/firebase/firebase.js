import _firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDdVppCfueHq5uvfDprFTu_lQo66-XxwZo',
  authDomain: 'web-member-k16.firebaseapp.com',
  databaseURL: 'https://web-member-k16.firebaseio.com',
  projectId: 'web-member-k16',
  storageBucket: 'web-member-k16.appspot.com',
  messagingSenderId: '1002605745910',
  appId: '1:1002605745910:web:11323d6accc1cb31ecbed7',
};
_firebase.initializeApp(firebaseConfig);
export const auth = _firebase.auth();
export const firebase = _firebase;
export const database = _firebase.database();
export const provider = new _firebase.auth.GoogleAuthProvider();
