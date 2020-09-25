import * as firebase from 'firebase/app';
import { config } from '../private/firebase-config';

firebase.initializeApp(config);

export default firebase;
