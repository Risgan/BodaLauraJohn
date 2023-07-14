import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { InvitadoService } from '../../Service/invitado.service';
import { MailService } from '../../Service/mail.service';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class RecepcionComponent implements OnInit{

  items!: MenuItem[]
  activeIndex: number = 0;

constructor(
  private confirmationService: ConfirmationService,
  private invitadoService: InvitadoService,
  private mailService: MailService
){

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
  }

  goToNextStep() {
    this.activeIndex++;
  }

  goToBackStep() {
    this.activeIndex--;
  }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
}

}
