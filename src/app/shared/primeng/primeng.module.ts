import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StepsModule } from 'primeng/steps';
import { FieldsetModule } from 'primeng/fieldset';

const modules=[
  ButtonModule,
  ToastModule,
  SidebarModule,
  ImageModule,
  GalleriaModule,
  CarouselModule,
  TabViewModule,
  PanelModule,
  ConfirmDialogModule,
  DialogModule,
  AutoCompleteModule,
  MenubarModule,
  TabMenuModule,
  RadioButtonModule,
  StepsModule,
  FieldsetModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modules
  ],
  exports: [
    modules
  ]
})
export class PrimengModule { }
