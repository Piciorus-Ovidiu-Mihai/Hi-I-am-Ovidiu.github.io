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
  isChecked = false;

  getHref(ref: string){
    return `#${ref}`;
  }
  
  toggleMobileMenu(menu: any) {
    menu.classList.toggle('open');
  }

  closeMenu(){
    this.isChecked = false;
  }
}
