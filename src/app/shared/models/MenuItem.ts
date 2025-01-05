import { TemplateRef } from '@angular/core';

export interface MenuItem {
  label: string;
  icon?: TemplateRef<HTMLElement>;
}
