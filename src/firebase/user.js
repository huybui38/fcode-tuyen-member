import {
  auth, provider, database,
} from './firebase';

export const addUser = async ({ email, displayName: name }) => {
  const { uid } = database.app.auth().currentUser;
  const userDB = database.ref(`users/${uid}`);
  const result = (await userDB.once('value')).val();
  if (!result) {
    userDB
      .set({
        email,
        name,
      })
      .then(() => console.log('success'))
      .catch((e) => console.error(`addUser${e}`));
  } else {
    alert('Already existed');
  }
  //   console.log(email, name);
};
export const signInWithGoogle = () => auth.signInWithPopup(provider);
