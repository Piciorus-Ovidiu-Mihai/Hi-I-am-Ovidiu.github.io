import { Component, OnInit } from '@angular/core';
import { workExperienceSection } from 'src/constants/app-constants';
import * as AOS from 'aos';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit{
  workExperience = workExperienceSection;

  ngOnInit() {
    AOS.init();
  }
}
