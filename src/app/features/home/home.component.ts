import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { PortfolioComponent } from "../../components/portfolio/portfolio.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienceComponent } from "../../components/experience/experience.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, HeroComponent, PortfolioComponent, FooterComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
