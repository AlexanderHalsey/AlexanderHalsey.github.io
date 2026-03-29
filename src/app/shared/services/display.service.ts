import {
  computed,
  inject,
  Injectable,
  OnDestroy,
  PLATFORM_ID,
  Signal,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface State {
  isMobile: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DisplayService implements OnDestroy {
  private platformId = inject(PLATFORM_ID);

  readonly state = signal<State>({
    isMobile: false,
  });

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.state.set({ isMobile: window.innerWidth < 768 });
      window.addEventListener('resize', this.onResize);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.onResize);
    }
  }

  private onResize = () => {
    this.set('isMobile', window.innerWidth < 768);
  };

  public set<K extends keyof State>(key: K, value: State[K]): void {
    this.state.update((currentValue) => ({ ...currentValue, [key]: value }));
  }

  public get<K extends keyof State>(key: K): Signal<State[K]> {
    return computed(() => this.state()[key]);
  }
}
