// Firebase
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCezi-53hV5YmQ3k2WfuLJ3Wrj3pLK40cc',
  authDomain: 'bookstore-team-project.firebaseapp.com',
  projectId: 'bookstore-team-project',
  storageBucket: 'bookstore-team-project.appspot.com',
  messagingSenderId: '596875191032',
  appId: '1:596875191032:web:e5dc6331f3745911fc510d',
};
