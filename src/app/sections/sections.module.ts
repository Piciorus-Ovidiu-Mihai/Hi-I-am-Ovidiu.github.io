import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { FormsModule } from '@angular/forms';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { EducationComponent } from './education/education.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ContactMeComponent,
    EducationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SectionsRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  exports: [
    AboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectsComponent,
    ContactMeComponent,
    EducationComponent
  ],
})
export class SectionsModule {}
