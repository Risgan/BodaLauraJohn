import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService {

  private invitado: string = ''

  constructor() { }

  public getInvitado(){
    return this.invitado;
  }

  public setInvitado(invitado: string){
    this.invitado = invitado;
  }
}
