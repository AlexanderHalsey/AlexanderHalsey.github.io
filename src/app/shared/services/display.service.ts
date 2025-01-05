import { computed, Injectable, OnDestroy, Signal, signal } from '@angular/core';

interface State {
  isMobile: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DisplayService implements OnDestroy {
  readonly state = signal<State>({
    isMobile: window.innerWidth < 768,
  });

  constructor() {
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
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
