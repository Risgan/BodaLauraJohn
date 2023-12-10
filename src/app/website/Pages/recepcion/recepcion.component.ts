import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { InvitadoService } from '../../Service/invitado.service';
import { MailService } from '../../Service/mail.service';
import { Invitado, InvitadoCarta, InvitadoPost } from '../../Entity/invitado';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class RecepcionComponent implements OnInit {

  items!: MenuItem[]
  activeIndex: number = 0;
  dataInvitado!: Invitado
  dataInvitadoUpdate!: InvitadoPost
  showDialog: boolean = false;
  dialogMessage: string = "Gracias por confirmar tu asistencia";

  constructor(
    private confirmationService: ConfirmationService,
    private invitadoService: InvitadoService,
    private mailService: MailService
  ) {

  }
  ngOnInit(): void {
    this.items = [
      {
        label: 'Asistencia',
        command: (event: any) => console.log("a"),
        // routerLink: 'Asistencia'
      },
      {
        label: 'Menú',
        command: (event: any) => console.log("b")
      },
      {
        label: 'Consideraciones',
        command: (event: any) => console.log("c")
      },
      // {
      //     label: 'Fuerte',
      //     command: (event: any) => console.log("d")
      // }
    ];

    this.invitadoService.getInvitado().subscribe(val => {
      console.log(val)
      this.dataInvitado = val
    })

  }

  goToNextStep() {
    this.activeIndex++;
  }

  goToAceptarAsistencia(event: boolean) {
    console.log(event);
    const { id, ...data } = this.dataInvitado;
    this.dataInvitadoUpdate = data
    console.log(data,this.dataInvitado,this.dataInvitadoUpdate);      

    data.asistencia = event

    if (event) {
      this.goToNextStep()
    } else {
      this.update();
    }
  }

  goToBackStep() {
    this.activeIndex--;
  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  update(){
    this.invitadoService.updateInvitado(this.dataInvitado.id, this.dataInvitadoUpdate)

  }

  goToCarta(event: InvitadoCarta){

    this.dataInvitadoUpdate.bebida = event.bebida
    this.dataInvitadoUpdate.coctel = event.coctel
    this.dataInvitadoUpdate.entrada = event.entrada
    this.dataInvitadoUpdate.fuerte = event.fuerte

  }

  sendUpdate(){
    this.showDialog = true;

  }

  closeDialog() {
    this.update()
    this.showDialog = false;
  }

}
