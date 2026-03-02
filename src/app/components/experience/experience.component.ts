import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experienceItems: any[] = [];

  constructor(private translate: TranslateService) {
    translate.addLangs(['fr', 'en', 'es']);
    translate.setDefaultLang('fr');

    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      translate.use(savedLang);
    } else {
      const browserLang = translate.getBrowserLang();
      const langToUse = browserLang?.match(/en|fr|es/) ? browserLang : 'fr';
      translate.use(langToUse);
    }

    this.loadExperience();
    this.translate.onLangChange.subscribe(() => this.loadExperience());
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  loadExperience() {
    this.translate.get('EXPERIENCE.ITEMS').subscribe((items: any[]) => {
      this.experienceItems = items;
    });
  }
}