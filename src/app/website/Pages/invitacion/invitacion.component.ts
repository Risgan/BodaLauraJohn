import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InvitadoService } from '../../Service/invitado.service';
import { Invitado } from '../../Entity/invitado';

@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.scss']
})
export class InvitacionComponent implements OnInit{

  @Output() next: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() asistencia!: boolean

  attendance!: string;
  showDialog: boolean = false;
  dialogMessage: string = "Lamentamos no contar con tu asistencia. ¡Esperamos verte en otra ocasión!";

  constructor(
    // private dialogService: DialogService
    private invitadoService: InvitadoService,
    ) {

    }

  ngOnInit() {
    
  }

    submitAttendance() {
      if (this.asistencia === true) {
        // Enviar la confirmación de asistencia al servidor o realizar alguna otra acción necesaria
        console.log('Confirmación de asistencia enviada');
        // Por ejemplo, puedes mostrar un mensaje de éxito en la página
        // alert('¡Confirmación de asistencia enviada! ¡Nos vemos en la boda!');
      } else {
        // Mostrar el diálogo con el mensaje
        this.showDialog = true;    
        this.invitadoService
      }
      this.next.emit(this.asistencia);

    }

  closeDialog() {
    this.showDialog = false;
  }

  test(){
    console.log(this.attendance)
    
  }
}
