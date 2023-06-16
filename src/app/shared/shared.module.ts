import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { MaterialModule } from './material/material.module';

const modules=[
  PrimengModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengModule,
    MaterialModule
  ],
  exports: [
    PrimengModule
  ]
})
export class SharedModule { }
