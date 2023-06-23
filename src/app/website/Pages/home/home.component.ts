import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MailService } from '../../Service/mail.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../Service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  
  constructor(
    // private messageService: MessageService,
    private emailService: MailService,
    private http: HttpClient,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {

    // this.images = await this.storageService.getListImage('')

    
  }
 
}
