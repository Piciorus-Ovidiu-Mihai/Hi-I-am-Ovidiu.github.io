import { Component, OnInit } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { aboutMe } from 'src/constants/app-constants';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent{
  github = faGithub;
  linkedin = faLinkedin;
  aboutMeInfo = aboutMe;
}
