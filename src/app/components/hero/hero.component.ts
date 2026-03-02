import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

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
