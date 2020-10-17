import firebase from './firebase';
import 'firebase/auth';

const auth = firebase.auth();

const authLogout = async () => {
  await auth.signOut();
};

const authLogin = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
};

const authReset = async (email) => {
  return await auth.sendPasswordResetEmail(email);
};

const authRegister = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    return {};
  } catch (error) {
    return { error };
  }
};

const authStateChange = auth.onAuthStateChanged.bind(auth);

export { authLogin, authLogout, authReset, authRegister, authStateChange };
