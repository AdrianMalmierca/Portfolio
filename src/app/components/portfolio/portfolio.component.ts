import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  projectCard: any = {};
  techStack: any = {};
  smallCards: any[] = [];

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

    this.loadPortfolio();
    this.translate.onLangChange.subscribe(() => this.loadPortfolio());
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  loadPortfolio() {
    this.translate.get('PORTFOLIO').subscribe((data: any) => {
      this.projectCard = data.PROJECT_CARD;
      this.techStack = data.TECH_STACK;
      this.smallCards = data.SMALL_CARDS;
    });
  }

}