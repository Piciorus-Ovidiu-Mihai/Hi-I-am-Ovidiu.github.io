import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  exports: [
    AboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent
  ]
})
export class SectionsModule { }
