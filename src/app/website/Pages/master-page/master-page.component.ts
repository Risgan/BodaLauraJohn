import { Component, OnInit } from '@angular/core';
import { InvitadoService } from '../../Service/invitado.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Invitado } from '../../Entity/invitado';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent implements OnInit{

  showDialog: boolean = false;
  selectedInvitado: Invitado | null = null;

  // formGroup: FormGroup | undefined;

  invitados: Invitado[] = [];

  constructor(
    private invitadoService: InvitadoService,
  ){
  
  }

  async ngOnInit(): Promise<void> {
    await this.obtenerInvitados();    
  }

  async obtenerInvitados() {
    const documentos = await this.invitadoService.getListInvitados();
    console.log(documentos)
    this.invitados = documentos.map((doc) => {
      const invitado: Invitado = {
        nombre: doc['nombre'],
        apellido: doc['apellido'],
        asistencia: doc['asistencia'],
        coctel: doc['coctel'],
        entrada: doc['entrada'],
        fuerte: doc['fuerte']
      };
      return invitado;
    });
    this.showDialog = true;
  }

  aceptarInvitacion() {
    if (this.selectedInvitado) {      
      // console.log(this.selectedInvitado);
      this.invitadoService.setInvitado(this.selectedInvitado);
    }
    this.showDialog = false;
    console.log(this.invitadoService.getInvitado())
  }
  
  confirm(){
    console.log(this.invitadoService.getInvitado());
    // this.visible = true
  }
}
