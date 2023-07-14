import { Component, OnInit } from '@angular/core';
import { InvitadoService } from '../../Service/invitado.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit{

  listCoctel: any[]=[]
  selectCoctel!: string

  listEntrada: any[]=[]
  selectEntrada!: string

  listFuerte: any[]=[]
  selectFuerte!: string

  listBebida: any[]=[]
  selectBebida!: string
  
  constructor(
    private invitadoService: InvitadoService,
  ){
  
  }

  ngOnInit(): void {
    this.loadData();
  }



  onCategoryChange() {
    console.log('Categoría seleccionada:', this.selectCoctel);
  }

  // getCategoryTitle(category: string): string {
  //   switch (category) {
  //     case 'cocteles':
  //       return 'Cocteles';
  //     case 'entradas':
  //       return 'Entradas';
  //     case 'fuerte':
  //       return 'Platos Fuertes';
  //     case 'bebidas':
  //       return 'Bebidas';
  //     default:
  //       return '';
  //   }
  // }

  // getMenuItems(category: string): string[] {
  //   switch (category) {
  //     case 'cocteles':
  //       return this.cocteles;
  //     case 'entradas':
  //       return this.entradas;
  //     case 'fuerte':
  //       return this.fuerte;
  //     case 'bebidas':
  //       return this.bebidas;
  //     default:
  //       return [];
  //   }
  // }

  async loadData(){
    const documentos = await this.invitadoService.getListCarta();
    console.log(documentos);
    console.log(documentos['Bebidas']);

    this.listCoctel = documentos['Coctel']
    this.listEntrada = documentos['Entradas']
    this.listFuerte = documentos['Fuertes']
    this.listBebida = documentos['Bebidas']
    
    // console.log(documentos);
    // console.log(documentos);

  }
}
