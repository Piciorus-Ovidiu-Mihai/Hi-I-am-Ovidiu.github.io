import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SectionsModule } from '../sections/sections.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    CoreComponent,
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SectionsModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
