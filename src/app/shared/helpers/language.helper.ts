import { MenuItem } from '@/models';

type LanguageMenuItem = MenuItem & { code: string; pathname: string };

export const languageOptions: LanguageMenuItem[] = [
  { code: 'en', label: 'English', pathname: '/en' },
  { code: 'fr', label: 'Français', pathname: '/fr' },
  { code: 'es', label: 'Español', pathname: '/es' },
];

export const localizeUrl = () => {
  if (location.pathname === '/') {
    location.href =
      location.origin +
      (languageOptions.find((option) => option.code === navigator.language.slice(0, 2))?.pathname ??
        '/en');
  }
};
