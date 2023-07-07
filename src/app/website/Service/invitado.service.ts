import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { collection, getDocs } from 'firebase/firestore';
import { Invitado } from '../Entity/invitado';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService {

  public invitado: BehaviorSubject<Invitado> = new BehaviorSubject<Invitado>({
    nombre: '',
    apellido: '',
    asistencia: false
  });
  private invitadosObservable!: Observable<Invitado>;
  // public subject: BehaviorSubject<Invitado> = new BehaviorSubject<Invitado>(this.invitado);

  // public changeValue(state: Invitado): Observable<Invitado> {
  //   return this.subject.next(state);
  // }


  constructor(
    private firebase: FirebaseService,
  ) { }

  public getInvitado(){
    return this.invitado;
  }

  public setInvitado(invitado: Invitado){
    // this.invitado = invitado;
    return this.invitado.next(invitado);

  }

  public async getListInvitados(){
    const db = this.firebase.getDb();
    const querySnapshot = await getDocs(collection(db,"Invitados"));
    let datos = querySnapshot.docs.map((doc) => doc.data());
    return datos.sort((a, b) => {
      if (a["nombre"] === "John" || a["nombre"] === "Laura") {
        return -1; // Mantener "John" y "Laura" al principio
      } else if (b["nombre"] === "John" || b["nombre"] === "Laura") {
        return 1; // Mantener "John" y "Laura" al principio
      } else {
        return a["nombre"].localeCompare(b["nombre"]); // Ordenar los demás nombres alfabéticamente
      }
    });
  }
}
