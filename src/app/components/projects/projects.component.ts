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

  projectsItems: any[] = [];

  constructor(private translate: TranslateService) {
    translate.addLangs(['fr', 'en', 'es']);
    translate.setDefaultLang('fr');

    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      translate.use(savedLang);
    } else {
      const browserLang = translate.getBrowserLang();
      const langToUse = browserLang?.match(/fr|en|es/) ? browserLang : 'fr';
      translate.use(langToUse);
    }

    this.loadProjects();
    this.translate.onLangChange.subscribe(() => this.loadProjects());
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  loadProjects() {
    this.translate.get('PROJECTS.ITEMS').subscribe((items: any[]) => {
      this.projectsItems = items;
    });
  }

}