import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider, 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmDKbtGSUVm_gZBQCC6EARRmhs9X4Clys",
    authDomain: "crown-clothes-852e1.firebaseapp.com",
    projectId: "crown-clothes-852e1",
    storageBucket: "crown-clothes-852e1.appspot.com",
    messagingSenderId: "811406910995",
    appId: "1:811406910995:web:1fd9fea2b3713ad1d001e6"
  };

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);