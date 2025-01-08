/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, forwardRef, HostListener, input, model } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { inputErrorAnimationTriggers } from '@/animations/input-error';

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
  animations: inputErrorAnimationTriggers('borderError', 'textError'),
})
export class TextAreaComponent implements ControlValueAccessor {
  value = model<string>('');

  onChange = (_value: string) => {};
  onTouched = () => {};

  error = input<string>();
  placeholder = input<string>('');

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
