import { Component } from '@angular/core';
import { ProjectsComponent } from "../../components/projects/projects.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [ProjectsComponent, CommonModule, RouterModule, TranslateModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
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
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
