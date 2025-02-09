import { wait } from '@/helpers/async.helper';
import { prefersReducedMotion } from '@/helpers/match-media.helper';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  titles = ['A fullstack web developper', 'A tech enthusiast', 'A problem solver'] as const;
  title = signal('');
  isTyping = signal(false);
  constructor() {
    if (!prefersReducedMotion) {
      this.loopTitles();
    } else {
      this.title.set(this.titles[0]);
    }
  }

  async loopTitles() {
    while (true) {
      for (const title of this.titles) {
        await wait(500);
        this.isTyping.set(true);
        // add title
        for (const char of title) {
          await wait(50);
          this.title.update((currentValue) => currentValue + char);
        }
        this.isTyping.set(false);
        await wait(4000);
        this.isTyping.set(true);
        // remove title
        for (let i = this.title().length; i > 0; i--) {
          await wait(20);
          this.title.update(() => this.title().slice(0, i - 1));
        }
        this.isTyping.set(false);
      }
    }
  }
}
