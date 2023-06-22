import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  listImages: any[]=[];

  constructor() { }


  async getListImage(path: string){

    const storage = getStorage();

    const listRef = ref(storage, 'home');

    
    await listAll(listRef).then(async (res) => {

      console.log(res);
      
      res.items.forEach(async (itemRef) => {
        
        await getDownloadURL(ref(storage, JSON.parse(JSON.stringify(itemRef))._location.path_))
          .then((url) => {
            this.listImages.push(url)
            console.log(this.listImages)

          })

                
        // All the items under listRef.
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
    console.log(this.listImages)

  }

}
