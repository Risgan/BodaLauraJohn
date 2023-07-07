import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MasterPageComponent } from './Pages/master-page/master-page.component';
import { UbicacionComponent } from './Pages/ubicacion/ubicacion.component';
import { RecepcionComponent } from './Pages/recepcion/recepcion.component';
import { GaleriaComponent } from './Pages/galeria/galeria.component';
import { CartaComponent } from './Pages/carta/carta.component';
import { HistoriaAmorComponent } from './Pages/historia-amor/historia-amor.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children:[
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path:'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path:'home/:id',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path:'ubicacion',
        component: UbicacionComponent,
        pathMatch: 'full'
      },
      {
        path:'historia',
        component: HistoriaAmorComponent,
        pathMatch: 'full'
      },
      {
        path:'recepcion',
        component: RecepcionComponent,
        pathMatch: 'full'
      },
      {
        path:'galeria',
        component: GaleriaComponent,
        pathMatch: 'full'
      },
      {
        path:'carta',
        component: CartaComponent,
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
