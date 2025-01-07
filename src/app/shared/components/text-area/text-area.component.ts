/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, forwardRef, HostListener, input, model, Signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ThemeService } from '@/services/theme.service';

import { Theme } from '@/models';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextAreaComponent),
      multi: true,
    },
  ],
})
export class TextAreaComponent implements ControlValueAccessor {
  value = model<string>('');

  onChange = (_value: string) => {};
  onTouched = () => {};

  error = input<string>();
  placeholder = input<string>('');

  theme: Signal<Theme>;
  constructor(themeService: ThemeService) {
    this.theme = themeService.get('theme');
  }

  onInput(event: Event) {
    this.value.set((event.target as HTMLTextAreaElement).value);
    this.onChange(this.value());
  }

  writeValue(value: string) {
    if (value === null) return;
    this.value.set(value);
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  @HostListener('focusout')
  onFocusOut() {
    this.onTouched();
  }
}
