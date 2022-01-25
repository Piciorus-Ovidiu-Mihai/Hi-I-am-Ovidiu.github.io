import { Component, OnInit } from '@angular/core';
import { skills } from 'src/constants/app-constants';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = skills;
}
