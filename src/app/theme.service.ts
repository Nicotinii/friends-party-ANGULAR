import { Injectable } from '@angular/core';

const THEME_KEY = 'theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  saveTheme(theme: string) {
    localStorage.setItem(THEME_KEY, theme);
  }

  getTheme(): string {
    const theme = localStorage.getItem(THEME_KEY);
    return theme !== null ? theme : 'light';
  }
}
