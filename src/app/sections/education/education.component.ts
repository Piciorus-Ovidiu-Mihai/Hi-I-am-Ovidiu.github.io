import { Component, OnInit } from '@angular/core';
import { educationSection } from 'src/constants/app-constants';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educationSection = educationSection;
}
