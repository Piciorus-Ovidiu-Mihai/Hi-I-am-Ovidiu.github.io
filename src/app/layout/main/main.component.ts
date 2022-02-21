import { Component, OnInit } from '@angular/core';
import { GithubProjectsService } from 'src/app/services/github-projects.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private githubService: GithubProjectsService) { }

  async ngOnInit() {
    const res = await this.githubService.getProgrammingLanguage();
    console.log(res);
  }

}
