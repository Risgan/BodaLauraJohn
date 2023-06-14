import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuerySnapshot, collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCTH4A6KVA3mhITuJl_f9CXsUvrInDxo9Y",
  authDomain: "backendbodalaurajohn.firebaseapp.com",
  projectId: "backendbodalaurajohn",
  storageBucket: "backendbodalaurajohn.appspot.com",
  messagingSenderId: "112795964757",
  appId: "1:112795964757:web:c00c67dcfff709bdc34bdc",
  measurementId: "G-BMJFWHG2RH"
};

@Injectable({
  providedIn: 'root'
})
export class MailService {

  // querySnapshot = QuerySnapshot
//  citiesRef = collection(db, "cities");
  
  constructor(private http: HttpClient) {
  }
  
  async test(){
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

    // Required for side-effects
    // require("firebase/firestore");

    // const citiesRef = collection(this.db, "cities");

// await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });
// await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"] });
// await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"] });
// await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"] });
// await setDoc(doc(citiesRef, "BJ"), {
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"] });

    // const items=[]
    const querySnapshot = await getDocs(collection(db,"test"));
    console.log(querySnapshot)

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });

    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      console.log(doc.data());
      var x =  Object.values(doc.data());
      console.log(x)
    });
  }
  
    
}
