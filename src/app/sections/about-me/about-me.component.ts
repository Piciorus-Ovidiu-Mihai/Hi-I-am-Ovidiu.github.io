import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
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
import * as AOS from 'aos';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
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
