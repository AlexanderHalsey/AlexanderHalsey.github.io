export const languages = ['en', 'fr', 'es']

if (location.pathname === '/') {
  location.href =
    location.origin +
    '/' +
    (languages.find((language) => language === navigator.language.slice(0, 2)) ?? 'en')
}
