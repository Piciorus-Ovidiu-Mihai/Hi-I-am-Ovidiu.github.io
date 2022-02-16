import { Component, OnInit } from '@angular/core';
import { skillsSection } from 'src/constants/app-constants';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('enterSkillsInfo', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(200px)' }),
        animate(
          '500ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),

    trigger('enterSkillsImage', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(200px)' }),
        animate(
          '500ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ]
})
export class SkillsComponent {
  skillsSection = skillsSection;
}
