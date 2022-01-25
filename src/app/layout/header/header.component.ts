import { Component, OnInit } from '@angular/core';
import { developerTitleName, headerButtons, hrefHeaderButtons } from 'src/constants/app-constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  developerName = developerTitleName.name;
  headerButtonsTitles = headerButtons;
  hrefs = hrefHeaderButtons;

  getHref(ref: string){
    return `#${ref}`;
  }
}
