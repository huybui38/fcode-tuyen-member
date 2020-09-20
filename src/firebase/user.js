import {
  auth, provider, database, firebase,
} from './firebase';

export const addUser = async ({
  email, name, phoneNum: phone, facebook,
}, callback) => {
  const { uid, email: providerEmail } = database.app.auth().currentUser;
  const userDB = database.ref(`users/${uid}`);
  const result = (await userDB.once('value')).val();
  if (!result) {
    console.log(`${providerEmail} === ${email}`);
    userDB
      .set({
        email,
        name,
        phone,
        facebook,
      })
      .then(() => callback())
      .catch((e) => callback(`addUser${e}`));
  } else {
    callback('Already existed');
  }
  //   console.log(email, name);
};
export const checkExist = async () => {
  const { uid } = database.app.auth().currentUser;
  const userDB = database.ref(`users/${uid}`);
  const result = (await userDB.once('value')).val();
  if (!result) { return null; }
  return result;
};
export const signInWithGoogle = () => auth.signInWithPopup(provider);
