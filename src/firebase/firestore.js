import firebase from './firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

const getCollection = async (collection) => {
  const snapshot = await firestore.collection(collection).get();
  const data = [];
  snapshot.forEach((snap) => data.push({ id: snap.id, ...snap.data() }));
  return data;
};

export { getCollection };
