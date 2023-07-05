import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MailService } from '../../Service/mail.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../Service/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

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
