import { Component, OnInit } from '@angular/core';
import { developerTitleName, headerMenuButtons } from 'src/constants/app-constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  developerName = developerTitleName.name;
  headerMenuButtons = headerMenuButtons;

  getHref(ref: string){
    return `#${ref}`;
  }
}
