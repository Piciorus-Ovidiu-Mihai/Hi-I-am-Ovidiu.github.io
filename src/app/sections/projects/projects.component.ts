import { Component, OnInit } from '@angular/core';
import { personalProjectsSection } from 'src/constants/app-constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  personalProjectsSection = personalProjectsSection;
}
