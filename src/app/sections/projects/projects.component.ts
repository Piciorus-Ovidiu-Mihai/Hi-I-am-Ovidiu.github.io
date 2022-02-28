import { Component, OnInit } from '@angular/core';
import { GithubProjectsService } from 'src/app/services/github-projects.service';
import { personalProjectsSection } from 'src/constants/app-constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  personalProjectsSection = personalProjectsSection;
  listOfProgrammingLanguages: any = [];

  constructor(private githubService: GithubProjectsService) {}

  ngOnInit(): void {
    this.getProjectLanguages();
  }

  async getProjectLanguages() {
    const res = await this.githubService.getProgrammingLanguage();
    let array = [];
    if ((res.status = 200)) {
      this.listOfProgrammingLanguages = res.data;
    }
  }

  convertFromObjectToArray(object: any) {
    let arrayResult = [];
    arrayResult = Object.keys(object).map((index) => {
      let person = object[index];
      return person;
    });
    return arrayResult;
  }

  colorBasedOnString(str: any){
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }
}
