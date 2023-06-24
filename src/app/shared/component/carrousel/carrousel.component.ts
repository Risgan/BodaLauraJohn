import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MailService } from 'src/app/website/Service/mail.service';
import { StorageService } from 'src/app/website/Service/storage.service';

import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom, EffectFade, EffectCube } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom, EffectFade, EffectCube]);

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarrouselComponent{

  @Input() images: any[] = [];

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;


  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 900,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    zoom: {
      maxRatio: 100, // Valor máximo de zoom permitido
    },
    // loop: true,
    
    // effect: "cube"
  };

  constructor(
    // private messageService: MessageService,
    private emailService: MailService,
    private http: HttpClient,
    private storageService: StorageService,
  ) { }

  
  onSlideChange() {
    // console.log('slide change');
    // console.log("----",this.config)

    if (this.config) {
      this.config.autoplay={
        delay: 100,
        disableOnInteraction: true,
      }; // Inicia el autoplay
    }
  }

  startAutoplay() {
    // console.log("----",this.config)
    if (this.config) {
      this.config.autoplay={
        delay: 3000,
        disableOnInteraction: true,
      }; // Inicia el autoplay
    }
    // this.swiper!.swiperRef.slideNext(200);

  }

  nextSlide() {
  }
 
}
