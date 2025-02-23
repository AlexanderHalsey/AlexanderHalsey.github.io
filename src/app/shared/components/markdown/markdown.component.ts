import { Component, computed, input } from '@angular/core';

import { marked, type MarkedOptions } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
})
export class MarkdownComponent {
  value = input.required<string>();
  options = input<MarkedOptions>();

  constructor() {
    marked.use({ hooks: { postprocess: DOMPurify.sanitize } });
  }

  formattedValue = computed(() => marked.parse(this.value(), this.options()));
}
