import { Component, computed, signal, Signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import {
  AbstractControl,
  ControlEvent,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  StatusChangeEvent,
  Validators,
} from '@angular/forms';

import { ButtonComponent } from '@/components/button/button.component';
import { IconComponent } from '@/components/icon/icon.component';
import { InputComponent } from '@/components/input/input.component';
import { TextAreaComponent } from '@/components/text-area/text-area.component';

import { DisplayService } from '@/services/display.service';
import { ThemeService } from '@/services/theme.service';

import { Theme } from '@/models';

@Component({
  selector: 'app-contact',
  imports: [
    ButtonComponent,
    IconComponent,
    InputComponent,
    NgTemplateOutlet,
    ReactiveFormsModule,
    TextAreaComponent,
  ],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  isMobile: Signal<boolean>;
  theme: Signal<Theme>;
  backgroundColor: Signal<string>;

  form: FormGroup;

  constructor(
    private displayService: DisplayService,
    private themeService: ThemeService,
    private formBuilder: FormBuilder,
  ) {
    this.isMobile = displayService.get('isMobile');
    this.theme = themeService.get('theme');
    this.backgroundColor = computed(() => themeService.backgroundColors().background2);

    this.form = formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: [''],
        company: [''],
        subject: ['', [Validators.required]],
        message: ['', [Validators.required]],
      } satisfies Record<keyof FormData, unknown>,
      { updateOn: 'blur' },
    );
    (Object.entries(this.form.controls) as [keyof FormData, AbstractControl][]).forEach(
      ([key, control]) => {
        control.events.subscribe(() => {
          const error: string | undefined = Object.keys(control.errors ?? {})[0];
          this.errorBag.update((existing) => ({
            ...existing,
            [key]: ERROR_MESSAGES[error] ?? error,
          }));
        });
      },
    );
    this.form.events.subscribe((e: ControlEvent<FormData>) => {
      if (!(e instanceof StatusChangeEvent)) return;
      if (e.status === 'VALID') {
        this.submitDisabled.set(false);
      }
    });
  }

  submitDisabled = signal(false);
  errorBag = signal<Partial<Record<keyof FormData, string>>>({});

  async onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('valid');
    } else {
      this.submitDisabled.set(true);
    }
  }
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export const ERROR_MESSAGES: Record<string, string> = {
  required: $localize`Required`,
  email: $localize`Invalid email`,
};
