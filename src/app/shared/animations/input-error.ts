import { animate, state, style, transition, trigger } from '@angular/animations';

export const inputErrorAnimationTriggers = (triggerBorderName: string, triggerTextName: string) => [
  trigger(triggerBorderName, [
    state(
      'error',
      style({
        'border-color': 'red',
        outline: '1px solid red',
      }),
    ),
    state('default', style({ 'border-color': 'var(--border-color)', outline: 'none' })),
    transition('error <=> default', [animate('200ms ease-in')]),
  ]),
  trigger(triggerTextName, [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-50%)' }),
      animate('200ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-50%)' })),
    ]),
  ]),
];
