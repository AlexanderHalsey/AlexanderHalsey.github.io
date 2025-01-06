import { IconInputs } from './Icon';

export type Theme = 'light' | 'dark';
export type ThemeOrSystem = Theme | 'system';

export interface ThemeOption {
  id: ThemeOrSystem;
  label: string;
  icon?: IconInputs;
}
