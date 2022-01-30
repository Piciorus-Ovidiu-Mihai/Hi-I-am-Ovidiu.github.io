import { Component, OnInit } from '@angular/core';
import { openSourceProjects } from 'src/constants/app-constants';

@Component({
  selector: 'app-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss']
})
export class OpenSourceComponent {
  openSourceProjects = openSourceProjects;
}
