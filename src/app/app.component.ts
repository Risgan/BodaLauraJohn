import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'BodaLauraJohn';


  constructor(private messageService: MessageService) {}

  showSuccess() {
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

}
