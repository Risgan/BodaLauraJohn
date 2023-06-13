import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MailService } from '../../Service/mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent {

  constructor(
    private messageService: MessageService,
    private emailService: MailService
    ) {}

  showSuccess() {
    this.enviarCorreo()
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Te amo mucho Laurita en verde' });
  }

  showInfo() {
      this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Te amo mucho Laurita en azul' });
  }

  showWarn() {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Te amo mucho Laurita en amarillo' });
  }

  showError() {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Te amo mucho Laurita en rojo' });
  }

  async enviarCorreo() {
    const destinatario = 'johnruedaf@gmail.com';
    const asunto = '¡Hola!';
    const contenido = 'Este es un ejemplo de correo enviado desde SendGrid en Angular.';

    // await this.emailService.enviarCorreo()
    //   .then(() => {
    //     console.log('Correo enviado correctamente.');
    //   })
    //   .catch((error) => {
    //     console.error('Error al en  viar el correo:', error);
    //   });
  }
}
