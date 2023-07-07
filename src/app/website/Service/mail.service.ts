import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuerySnapshot, addDoc, collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
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
    const db = this.firebase.getDb();
    console.log(db);
    
    const querySnapshot = await getDocs(collection(db,"Invitados"));
    console.log(querySnapshot)

    let datos = querySnapshot.docs.map((doc) => doc.data());
    datos.sort((a, b) => {
      if (a["nombre"] === "John" || a["nombre"] === "Laura") {
        return -1; // Mantener "John" y "Laura" al principio
      } else if (b["nombre"] === "John" || b["nombre"] === "Laura") {
        return 1; // Mantener "John" y "Laura" al principio
      } else {
        return a["nombre"].localeCompare(b["nombre"]); // Ordenar los demás nombres alfabéticamente
      }
    });
    console.log(datos);
    

    const querySnapshots = await getDocs(collection(db,"Carta"));

    let dato = querySnapshots.docs.map((doc) => doc.data());

    console.log(querySnapshots,dato)

    // const querySnapshot = await getDocs(collection(db,"test"));
    // console.log(querySnapshot)

    // querySnapshot.forEach((doc) => {
    //   console.log(`${doc.id} => ${doc.data()}`);
    //   const data = doc.data();

    //   console.log(data)
    // });


    const invitadoRef = doc(db, 'Invitados', '5zUysYhipWXEt84Ir68h');

    console.log(invitadoRef);


    // querySnapshot.forEach(async (doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    //   console.log(doc.data());
    //   var x =  Object.values(doc.data());
    //   console.log(x)
    // });

    // const storage2 = this.firebase.getstorage();
    // console.log(storage2);
    
    // const storage = getStorage();
    // // console.log(storage2);

    // // const pathReference = ref(storage, 'home/0-5000x3333.jpg');
    
    // // console.log(pathReference);

    // const listRef = ref(storage, 'home');

    // console.log(listRef);
    
    // listAll(listRef)
    // .then((res) => {
    //   console.log(res);
      
    //   res.prefixes.forEach((folderRef) => {
    //     console.log(folderRef);
        
    //     // All the prefixes under listRef.
    //     // You may call listAll() recursively on them.
    //   });
    //   res.items.forEach((itemRef) => {
    //     console.log(itemRef);
    //     console.log(JSON.parse(JSON.stringify(itemRef))._location.path_);
        
    //     getDownloadURL(ref(storage, JSON.parse(JSON.stringify(itemRef))._location.path_))
    //       .then((url) => {
    //         console.log(url);
            
    //       })
                
    //     // All the items under listRef.
    //   });
    // }).catch((error) => {
    //   // Uh-oh, an error occurred!
    // });
    
    


  }
  
  async test2(){
    const db = this.firebase.getDb();
    let invitado = {nombre:'Laura',apellido:'Celemin',asistencia:false,coctel:null,entrada:null,fuerte:null}

    
    invitado = {nombre:'Libia',apellido:'Forero',asistencia:false,coctel:null,entrada:null,fuerte:null}


  }
    
}
