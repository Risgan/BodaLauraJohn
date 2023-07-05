import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InvitadoService } from '../../Service/invitado.service';
import { MailService } from '../../Service/mail.service';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class RecepcionComponent {

constructor(
  private confirmationService: ConfirmationService,
  private invitadoService: InvitadoService,
  private mailService: MailService
){

}

  confirm1() {
    // this.confirmationService.confirm({
    //     message: 'Are you sure that you want to proceed?',
    //     header: 'Confirmation',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //         // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
    //         console.log("ok");
            
    //     },
    //     reject: (type: any) => {
    //        console.log(type);
           
    //     }
    // });
    this.invitadoService.setInvitado("Hola")
  }

  confirm(){
    console.log(this.invitadoService.getInvitado());
    this.mailService.test()
    // this.mailService.test2()
  }
}
