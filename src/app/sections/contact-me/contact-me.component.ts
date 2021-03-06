import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  aboutMeSection,
  contactMe,
  facebookLink,
  githubLink,
  gmailLink,
  linkedinLink,
} from 'src/constants/app-constants';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  contactMe = contactMe;
  github = faGithub;
  linkedin = faLinkedin;
  aboutMeInfo = aboutMeSection;

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
}
