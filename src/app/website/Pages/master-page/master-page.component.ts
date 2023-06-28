import { Component } from '@angular/core';
import { InvitadoService } from '../../Service/invitado.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.scss']
})
export class MasterPageComponent {

  visible: boolean = false;
  formGroup: FormGroup | undefined;

  constructor(
    private invitadoService: InvitadoService
  ){
  
  }

  
  confirm(){
    console.log(this.invitadoService.getInvitado());
    this.visible = true
  }
}
