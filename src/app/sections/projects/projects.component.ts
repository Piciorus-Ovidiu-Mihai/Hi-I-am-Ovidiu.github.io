import { Component, OnInit } from '@angular/core';
import { personalProjects } from 'src/constants/app-constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  personalProjects = personalProjects;
}
