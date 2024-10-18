import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqoEzLnt4WjiRUwPa7eOZcVS0GSr7GMng",
    authDomain: "cloud-one-8bd45.firebaseapp.com",
    projectId: "cloud-one-8bd45",
    storageBucket: "cloud-one-8bd45.appspot.com",
    messagingSenderId: "817362263851",
    appId: "1:817362263851:web:a2d18ce657361654886f6e"
  };
  

const app = initializeApp(firebaseConfig);



const db = getFirestore(app);

export default db;