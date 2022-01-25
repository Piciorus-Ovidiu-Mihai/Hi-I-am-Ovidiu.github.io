import { Component } from '@angular/core';
import { workExperienceSection } from 'src/constants/app-constants';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent {
  workExperience = workExperienceSection;
}
