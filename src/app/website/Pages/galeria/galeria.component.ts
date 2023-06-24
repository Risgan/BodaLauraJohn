import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../Service/storage.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit{

  imagesLaura: any[] = [];
  imagesJohn: any[] = [];
  imagesJohnLaura: any[] = [];

  constructor(
    private storageService: StorageService
  ){

  }

  async ngOnInit(){
    setTimeout(async () => {
      this.imagesLaura = await this.storageService.getListImage('Laura')      
    }, 1000);
    
    setTimeout(async () => {
      this.imagesJohn = await this.storageService.getListImage('John')
    
    }, 1000);

    setTimeout(async () => {
      this.imagesJohnLaura = await this.storageService.getListImage('JohnLaura')
    }, 1000);
    

  }

  test(){
    console.log(this.imagesLaura );
    console.log(this.imagesJohn );
    console.log(this.imagesJohnLaura );
    
  }
}
