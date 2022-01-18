import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  exports: [
    AboutMeComponent,
  ]
})
export class SectionsModule { }
