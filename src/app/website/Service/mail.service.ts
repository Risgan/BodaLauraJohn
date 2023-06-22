import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuerySnapshot, collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { FirebaseService } from './firebase.service';
import { getDownloadURL, getStorage, list, listAll, ref } from 'firebase/storage';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient,
    private firebase: FirebaseService,
    ) {
  }
  
  async test(){
    // const db = this.firebase.getDb();
    // console.log(db);
    

    // const querySnapshot = await getDocs(collection(db,"test"));
    // console.log(querySnapshot)

    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    // });

    // querySnapshot.forEach(async (doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    //   console.log(doc.data());
    //   var x =  Object.values(doc.data());
    //   console.log(x)
    // });

    // const storage2 = this.firebase.getstorage();
    // console.log(storage2);
    
    const storage = getStorage();
    // console.log(storage2);

    // const pathReference = ref(storage, 'home/0-5000x3333.jpg');
    
    // console.log(pathReference);

    const listRef = ref(storage, 'home');

    console.log(listRef);
    
    listAll(listRef)
    .then((res) => {
      console.log(res);
      
      res.prefixes.forEach((folderRef) => {
        console.log(folderRef);
        
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((itemRef) => {
        console.log(itemRef);
        console.log(JSON.parse(JSON.stringify(itemRef))._location.path_);
        
        getDownloadURL(ref(storage, JSON.parse(JSON.stringify(itemRef))._location.path_))
          .then((url) => {
            console.log(url);
            
          })
                
        // All the items under listRef.
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
    
    


  }
  
    
}
