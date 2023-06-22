import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTH4A6KVA3mhITuJl_f9CXsUvrInDxo9Y",
  authDomain: "backendbodalaurajohn.firebaseapp.com",
  projectId: "backendbodalaurajohn",
  storageBucket: "backendbodalaurajohn.appspot.com",
  messagingSenderId: "112795964757",
  appId: "1:112795964757:web:c00c67dcfff709bdc34bdc",
  measurementId: "G-BMJFWHG2RH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  

  constructor() { }

  getDb(){
    return db;
  }

  getstorage(){
    return storage;
  }
}
