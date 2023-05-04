import { Component, OnInit } from '@angular/core';
import { ThemeService } from "./theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'friends-party-ANGULAR';

  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    const theme = this.themeService.getTheme();
    if (theme) {
      document.body.className = theme;
    }
  }

  toggleTheme() {
    document.body.classList.toggle('dark');
    const theme = document.body.className;
    this.themeService.saveTheme(theme);
  }
}
