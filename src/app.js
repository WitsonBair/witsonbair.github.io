import i18next from 'i18next';
import onChange from 'on-change';
// import resourses from './locales/index.js';

const languages = ['en', 'ru'];

const handleSwitchLanguage = (state) => (evt) => {
  const { language } = evt.target.dataset;

  state.language = language;
};

const render = (terminal, watchedState, i18nInstance) => {
  const languageToggler = document.createElement('p');
  languageToggler.classList.add('output');

  languages.forEach((language) => {
    const a = document.createElement('a');
    const className = watchedState.language === language ? 'russian' : 'english';
    a.classList.add(className);
    a.textContent = i18nInstance.t(`languages.${language}`);
    a.addEventListener('click', handleSwitchLanguage(watchedState));
    languageToggler.appendChild(a);
  });

  terminal.innerHTML = '';
  terminal.append(languageToggler);
};

export default async () => {
  const defaultLanguage = 'ru';
  const i18nInstance = i18next.createInstance();
  await i18nInstance.init({
    language: defaultLanguage,
    debug: false,
    resourses: {
      en: {
        tranlastion: {
          languages: {
            en: 'English',
            ru: 'Русский',
          },
        },
      },
      ru: {
        tranlastion: {
          languages: {
            en: 'English',
            ru: 'Русский',
          },
        },
      },
    },
  });

  const state = {
    language: defaultLanguage,
  };

  const terminal = document.querySelector('.terminal');

  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      case 'language': i18nInstance.changeLanguage(value).then(() => render(terminal, watchedState, i18nInstance));
        break;

      default:
        break;
    }
  });

  render(terminal, watchedState, i18nInstance);
};
