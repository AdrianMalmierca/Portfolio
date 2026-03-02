import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { PortfolioComponent } from "../../components/portfolio/portfolio.component";
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienceComponent } from "../../components/experience/experience.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, PortfolioComponent, ProjectsComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
