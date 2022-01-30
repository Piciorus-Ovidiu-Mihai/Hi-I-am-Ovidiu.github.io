import { Component, OnInit } from '@angular/core';
import { contactMe } from 'src/constants/app-constants';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  contactMe = contactMe;
}
