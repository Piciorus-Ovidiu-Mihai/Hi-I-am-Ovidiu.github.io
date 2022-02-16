import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import {
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
  aboutMeSection,
  facebookLink,
  githubLink,
  gmailLink,
  linkedinLink,
} from 'src/constants/app-constants';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    trigger('enterAboutMe', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-200px)' }),
        animate(
          '500ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),

    trigger('enterImage', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(200px)' }),
        animate(
          '500ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),
  ],
})
export class AboutMeComponent {
  github = faGithub;
  linkedin = faLinkedin;
  aboutMeSection = aboutMeSection;

  goToGithub() {
    window.open(githubLink);
  }

  goToLinkedin() {
    window.open(linkedinLink);
  }

  goToFacebook() {
    window.open(facebookLink);
  }

  goToGmail() {
    window.open(gmailLink);
  }

  goToMyResume() {
    window.open(aboutMeSection.resumeLink);
  }
}
