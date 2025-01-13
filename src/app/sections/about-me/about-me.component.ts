import { AfterViewInit, Component, computed, OnDestroy, Signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

import { ThemeService } from '@/services/theme.service';
import { scrollObserver } from '@/helpers/scroll.helper';

@Component({
  selector: 'app-about-me',
  imports: [NgOptimizedImage],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent implements AfterViewInit, OnDestroy {
  backgroundColor: Signal<string>;
  constructor(private themeService: ThemeService) {
    this.backgroundColor = computed(() => themeService.backgroundColors().background1);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  scrollObserverDisconnect = () => {};
  ngAfterViewInit() {
    this.scrollObserverDisconnect = scrollObserver('.about-me', {
      enterCallback: (entry) => {
        entry.target.classList.add('show');
      },
      options: { threshold: 0.3 },
    });
  }

  ngOnDestroy(): void {
    this.scrollObserverDisconnect();
  }
}
