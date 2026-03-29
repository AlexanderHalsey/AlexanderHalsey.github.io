import { Component, computed, inject, input, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { marked, type MarkedOptions } from 'marked';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
})
export class MarkdownComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  value = input.required<string>();
  options = input<MarkedOptions>();

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const { default: DOMPurify } = await import('isomorphic-dompurify');
      marked.use({ hooks: { postprocess: DOMPurify.sanitize } });
    }
  }

  formattedValue = computed(() => marked.parse(this.value(), this.options()));
}
