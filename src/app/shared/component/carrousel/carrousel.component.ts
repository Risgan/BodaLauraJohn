import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MailService } from 'src/app/website/Service/mail.service';
import { StorageService } from 'src/app/website/Service/storage.service';

import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom, EffectFade, EffectCube } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom, EffectFade, EffectCube]);

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarrouselComponent implements OnInit{

  @Input() galeria="home";

  images: any[] = [];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    // navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 2000,
    },
    zoom: {
      maxRatio: 100, // Valor máximo de zoom permitido
    },
    loop: true
    // effect: "cube"
  };

  constructor(
    // private messageService: MessageService,
    private emailService: MailService,
    private http: HttpClient,
    private storageService: StorageService,
  ) { }

  async ngOnInit() {

    this.images = await this.storageService.getListImage(this.galeria)

    
  }
 
}
