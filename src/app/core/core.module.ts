import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SectionsModule } from '../sections/sections.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from '../layout/main/main.component';


@NgModule({
  declarations: [
    CoreComponent,
    MainComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SectionsModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
