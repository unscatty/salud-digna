import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMrAWF1QK36Qs-miieczyzPh5-BvcEJAc",
    authDomain: "nutrifacil-83923.firebaseapp.com",
    projectId: "nutrifacil-83923",
    storageBucket: "nutrifacil-83923.appspot.com",
    messagingSenderId: "624727887586",
    appId: "1:624727887586:web:96b32074aea463c78758bb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);