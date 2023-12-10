import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { Invitado, InvitadoPost } from '../Entity/invitado';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService {

  public invitado: BehaviorSubject<Invitado> = new BehaviorSubject<Invitado>({
    id:'',
    nombre: '',
    apellido: '',
    asistencia: false
  });
  private invitadosObservable!: Observable<Invitado>;
  // public subject: BehaviorSubject<Invitado> = new BehaviorSubject<Invitado>(this.invitado);

  // public changeValue(state: Invitado): Observable<Invitado> {
  //   return this.subject.next(state);
  // }
  db = this.firebase.getDb();

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
    
    const querySnapshot = await getDocs(collection(this.db,"Invitados"));
    let datos = querySnapshot.docs.map((doc) => {
      return{
        data: doc.data(),
        id: doc.id
      }
    });

    return datos.sort((a, b) => {
      if (a.data["nombre"] === "John" || a.data["nombre"] === "Laura") {
        return -1; // Mantener "John" y "Laura" al principio
      } else if (b.data["nombre"] === "John" || b.data["nombre"] === "Laura") {
        return 1; // Mantener "John" y "Laura" al principio
      } else {
        return a.data["nombre"].localeCompare(b.data["nombre"]); // Ordenar los demás nombres alfabéticamente
      }
    });
  }

  public async getListCarta(){
    
    const querySnapshot = await getDocs(collection(this.db,"Carta"));
    let datos = querySnapshot.docs.map((doc) => doc.data());    
    // console.log(datos[0]);
    return datos[0];
  }

  public async updateInvitado(id: string, data: InvitadoPost){
    try {
      console.log(id)
      const refe = doc(this.db, 'Invitados', id)
      await updateDoc(refe, data);
      console.log('Registro actualizado exitosamente.');
    } catch (error) {
      console.error('Error al actualizar el registro:', error);
    }
  }
}
