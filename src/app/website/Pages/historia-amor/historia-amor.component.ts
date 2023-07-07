import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../../Service/mail.service';
import { StorageService } from '../../Service/storage.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-historia-amor',
  templateUrl: './historia-amor.component.html',
  styleUrls: ['./historia-amor.component.scss'],
  providers: [MessageService]

})
export class HistoriaAmorComponent  implements OnInit {

  imageshome: any[] = [];
  id?: string;

  constructor(
    // private messageService: MessageService,
    private emailService: MailService,
    private http: HttpClient,
    private storageService: StorageService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.get('id');
    });
    console.log(this.id);
    
    this.imageshome = await this.storageService.getListImage('JohnLaura')
  }
 
}