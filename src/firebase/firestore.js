import firebase from './firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

const fetchData = async (collections) => {
  const data = {};

  await Promise.all(
    collections.map(async ({ name, ...rest }) => {
      const _data = await getCollectionData({ ...rest });
      data[name] = data[name] ? [...data[name], ..._data] : _data;
    })
  );

  return data;
};

const getCollectionData = async ({ url, filter = null, limit = null }) => {
  let ref = firestore.collection(url);

  if (filter) {
    ref = ref.where(...filter);
  }
  if (limit) {
    ref = ref.limit(limit);
  }

  const snapshot = await ref.get();

  const data = [];
  snapshot.forEach((snap) => data.push({ id: snap.id, ...snap.data() }));
  return data;
};

const getDoc = async (url, id) => {
  try {
    const snapshot = await firestore.collection(url).doc(id).get();
    return {
      data: snapshot.data(),
    };
  } catch (error) {
    return { error };
  }
};

const addOrden = async (orden) => {
  const { id } = await firestore.collection('orders').add(orden);
  return id;
};

export { fetchData, getCollectionData, getDoc, addOrden };
