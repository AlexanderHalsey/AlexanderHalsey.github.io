import { computed, Injectable, Signal, signal } from '@angular/core';

import { Theme, ThemeOrSystem } from '@/models';

export const BACKGROUND_COLORS = {
  light: {
    background1: '#a16d6d',
    background2: '#507862',
  },
  dark: {
    background1: '#0d0909',
    background2: '#0a1710',
  },
} as const;

interface State {
  theme: Theme;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly state = signal<State>({
    theme: 'light',
  });
  readonly backgroundColors = computed(() => BACKGROUND_COLORS[this.state().theme]);

  constructor() {
    this.setTheme((localStorage.getItem('theme') as 'light' | 'dark') ?? this.getSystemPreference);
  }

  public get<K extends keyof State>(key: K): Signal<State[K]> {
    return computed(() => this.state()[key]);
  }

  public setTheme = (theme: ThemeOrSystem) => {
    if (theme === 'system') theme = this.getSystemPreference();
    if (theme === 'dark') {
      document.body.classList.add('darkmode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('darkmode');
      localStorage.setItem('theme', 'light');
    }
    this.state.update((currentValue) => ({ ...currentValue, theme }));
  };

  private getSystemPreference = (): Theme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
}
