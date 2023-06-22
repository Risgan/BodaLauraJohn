import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  dias!: number;
  horasA: number = 0;
  minutos!: number;
  segundos!: number;

  constructor() {

  }

  ngOnInit() {

  }

  // actualizarFecha(){
  // }
  actualizarFecha() {
    const fecha1: Date = new Date();
    const fecha2: Date = new Date('2024-04-27T16:30:00');
    // const fecha2: Date = new Date('2023-06-21T17:39:00');

    // Diferencia en milisegundos entre las dos fechas
    let diferenciaMilisegundos: number = (fecha2.getTime() - fecha1.getTime());

    if (diferenciaMilisegundos > 0) {

      // Cálculo de los días, horas, minutos y segundos
      const segundos: number = Math.floor(diferenciaMilisegundos / 1000);
      const minutos: number = Math.floor(segundos / 60);
      const horas: number = Math.floor(minutos / 60);
      const dias: number = Math.floor(horas / 24);

      // Resto de horas, minutos y segundos después de calcular los días
      const horasRestantes: number = horas % 24;
      const minutosRestantes: number = minutos % 60;
      const segundosRestantes: number = segundos % 60;

      // console.log(`Diferencia: ${dias} días, ${horasRestantes} horas, ${minutosRestantes} minutos, ${segundosRestantes} segundos`);

      document.getElementById('dias')!.innerText = dias.toString()
      document.getElementById('horas')!.innerText = horasRestantes.toString()
      document.getElementById('minutos')!.innerText = minutosRestantes.toString()
      document.getElementById('segundos')!.innerText = segundosRestantes.toString()
    }
  }

}

setInterval(actualizarFecha, 1000);

const instancia = new ClockComponent();

function actualizarFecha(): void {
  instancia.actualizarFecha()
}

