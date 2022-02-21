import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';

@Injectable({
  providedIn: 'root'
})
export class GithubProjectsService {
  octokit = new Octokit();


  constructor() { }

  async getProgrammingLanguage(){
    return await this.octokit.request('GET /repos/{owner}/{repo}/languages', {
      owner: 'Piciorus-Ovidiu-Mihai',
      repo: 'Angular-Project-Generator'
    });
  }
  
}
