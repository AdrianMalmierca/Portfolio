import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {
  constructor(private translate: TranslateService) {
      this.translate.setDefaultLang('fr');
      this.translate.use('fr');
    }

    switchLang(lang: string) {
      this.translate.use(lang);
    }
}
