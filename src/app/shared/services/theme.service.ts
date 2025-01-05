import { computed, Injectable, OnDestroy, Signal, signal } from '@angular/core';

const BACKGROUND_COLORS = {
  light: {
    background1: '#bf5252',
    background2: '#3d9464',
  },
  dark: {
    background1: '#301616',
    background2: '#0f2e1d',
  },
} as const;

export type Theme = 'light' | 'dark';
export type ThemeOrSystem = Theme | 'system';

interface State {
  theme: Theme;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnDestroy {
  readonly state = signal<State>({
    theme: 'light',
  });
  readonly backgroundColors = computed(() => BACKGROUND_COLORS[this.state().theme]);

  constructor() {
    this.setTheme((localStorage.getItem('theme') as 'light' | 'dark') ?? this.getSystemPreference);

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this.onSystemChange);
  }

  ngOnDestroy() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', this.onSystemChange);
  }

  onSystemChange = () => this.setTheme('system');

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
