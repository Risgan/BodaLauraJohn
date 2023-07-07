import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MailService } from '../../Service/mail.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../Service/storage.service';
import { ActivatedRoute } from '@angular/router';
import { Invitado } from '../../Entity/invitado';
import { InvitadoService } from '../../Service/invitado.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {
  invitado?: Invitado;
  imageshome: any[] = [];
  id?: string;

  constructor(
    // private messageService: MessageService,
    private emailService: MailService,
    private http: HttpClient,
    private storageService: StorageService,
    private invitadoService: InvitadoService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.invitadoService.invitado.subscribe((invitado: Invitado) => {
      this.invitado = invitado;
      console.log(this.id, this.invitado);
    });
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });
    console.log(this.id,this.invitado);
    
    this.imageshome = await this.storageService.getListImage('JohnLaura')
  }

 
}
