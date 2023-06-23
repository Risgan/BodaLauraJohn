import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './Pages/home/home.component';
import { MasterPageComponent } from './Pages/master-page/master-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './Pages/master-page/header/header.component';
import { FooterComponent } from './Pages/master-page/footer/footer.component';
import { MenuComponent } from './Pages/master-page/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ClockComponent } from './Pages/master-page/clock/clock.component';
import { InvitacionComponent } from './Pages/invitacion/invitacion.component';
import { UbicacionComponent } from './Pages/ubicacion/ubicacion.component';
import { RecepcionComponent } from './Pages/recepcion/recepcion.component';
import { ConfirmacionComponent } from './Pages/confirmacion/confirmacion.component';
import { GaleriaComponent } from './Pages/galeria/galeria.component';
import { CartaComponent } from './Pages/carta/carta.component';
import {SwiperModule} from 'swiper/angular';
import { CarrouselComponent } from '../shared/component/carrousel/carrousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ClockComponent,
    InvitacionComponent,
    UbicacionComponent,
    RecepcionComponent,
    ConfirmacionComponent,
    GaleriaComponent,
    CartaComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    SwiperModule
  ]
})
export class WebsiteModule { }
