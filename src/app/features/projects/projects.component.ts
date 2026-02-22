import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  constructor(private translate: TranslateService) {
      this.translate.setDefaultLang('fr');
      this.translate.use('fr');
    }

    switchLang(lang: string) {
      this.translate.use(lang);
    }

  getGithubLink(title: string): string {
    const map: Record<string, string> = {
      Chatbot: 'https://github.com/AdrianMalmierca/Chatbot',
      AWS: 'https://github.com/AdrianMalmierca/Cloudproject',
      Categorify: 'https://github.com/AdrianMalmierca/Categorify',
      'Daily Mood': 'https://github.com/AdrianMalmierca/DailyMood',
      Ledgerly: 'https://github.com/AdrianMalmierca/Ledgerly'
    };

    return map[title] ?? '#';
  }
  }
