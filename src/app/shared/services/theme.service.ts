import { computed, Injectable, Signal, signal } from '@angular/core';

import { getColorGradients } from '@/helpers/theme.helper';

import { Theme, ThemeOrSystem } from '@/models';
import { prefersDark } from '@/helpers/match-media.helper';

export const MOUNTAIN_BACKGROUND_COLOR = {
  light: '#35473e',
  dark: '#0a1710',
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
  readonly mountainBackgroundColor = computed(() => MOUNTAIN_BACKGROUND_COLOR[this.state().theme]);

  public mountainGradients = computed(() =>
    getColorGradients(
      this.state().theme === 'light' ? '#9dc9f5' : '#2769ab',
      this.mountainBackgroundColor(),
      5,
    ),
  );

  constructor() {
    this.setTheme(
      (localStorage.getItem('theme') as 'light' | 'dark') ?? this.getSystemPreference(),
    );
  }

  public get<K extends keyof State>(key: K): Signal<State[K]> {
    return computed(() => this.state()[key]);
  }

  public setTheme = (theme: ThemeOrSystem) => {
    if (theme === 'system') theme = this.getSystemPreference();
    if (theme === 'dark') {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    this.state.update((currentValue) => ({ ...currentValue, theme }));
  };

  private getSystemPreference = (): Theme => {
    return prefersDark ? 'dark' : 'light';
  };
}
