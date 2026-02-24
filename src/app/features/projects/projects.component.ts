import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

interface Project {
  ID: string;
  TITLE: string;
  TEXT1: string;
  TEXT2?: string;
  TEXT3?: string;
  TEXT4?: string;
  LIST?: string[];
  LINK_TEXT?: string;
  LINK_TEXT2?: string;
  STACK: string;
  GITHUB: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnDestroy {

  projects: Project[] = [];
  private langSub!: Subscription;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');

    this.loadProjects();

    this.langSub = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.loadProjects();
      }
    );
  }

  loadProjects() {
    this.translate.get('PROJECTS.ITEMS').subscribe((items: Project[]) => {
      this.projects = items;
    });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnDestroy() {
    this.langSub.unsubscribe();
  }

  getGithubLink(title: string): string {
    const map: Record<string, string> = {
      'Chatbot': 'https://github.com/AdrianMalmierca/Chatbot',
      'AWS': 'https://github.com/AdrianMalmierca/Cloudproject',
      'Categorify': 'https://github.com/AdrianMalmierca/Categorify',
      'Daily Mood': 'https://github.com/AdrianMalmierca/DailyMood',
      'Ledgerly': 'https://github.com/AdrianMalmierca/Ledgerly',
      'CI': 'https://github.com/AdrianMalmierca/CI-CD'
    };

    return map[title] ?? '#';
  }
}