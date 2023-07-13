import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.scss']
})
export class InvitacionComponent {

  @Output() next = new EventEmitter();

  attendance!: string;
  showDialog: boolean = false;
  dialogMessage: string = "Lamentamos no contar con tu asistencia. ¡Esperamos verte en otra ocasión!";

  constructor(
    // private dialogService: DialogService
    ) {}

    submitAttendance() {
      if (this.attendance === 'yes') {
        // Enviar la confirmación de asistencia al servidor o realizar alguna otra acción necesaria
        console.log('Confirmación de asistencia enviada');
        // Por ejemplo, puedes mostrar un mensaje de éxito en la página
        // alert('¡Confirmación de asistencia enviada! ¡Nos vemos en la boda!');
        this.next.emit();
      } else {
        // Mostrar el diálogo con el mensaje
        this.showDialog = true;
      }
    }

  closeDialog() {
    this.showDialog = false;
  }
}
