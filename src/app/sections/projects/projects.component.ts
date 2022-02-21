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
      console.log(this.listOfProgrammingLanguages)
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
}
