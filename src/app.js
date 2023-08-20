import i18n from 'i18next';
import onChange from 'on-change';
import resources from './locales/index.js';

// BEGIN (write your solution here)
const languages = ['en', 'ru'];

const handleSwitchLanguage = (state) => (evt) => {
  const { lng } = evt.target.dataset;

  state.lng = lng;
};

const render = (container, watchedState, i18nInstance) => {
  const lngTogglerContainer = document.createElement('p');
  lngTogglerContainer.classList.add('output');

  languages.forEach((lng) => {
    const lngToggler = document.createElement('a');
    // const language = watchedState.lng === lng ? 'english' : 'russian';
    lngToggler.setAttribute('data-lng', lng);
    lngToggler.textContent = i18nInstance.t(`languages.${lng}`);
    lngToggler.addEventListener('click', handleSwitchLanguage(watchedState));
    lngTogglerContainer.appendChild(lngToggler);
  });

  const heroNameHeader = document.createElement('h1');
  heroNameHeader.textContent = i18nInstance.t('home.header');
  const heroName = document.createElement('span');
  heroName.classList.add('highlight');
  heroName.textContent = i18nInstance.t('home.name');
  heroNameHeader.appendChild(heroName);

  const description = document.createElement('p');
  description.classList.add('output');
  description.textContent = i18nInstance.t('home.description');

  const linkContainer = document.createElement('p');

  const resume = document.createElement('a');
  resume.setAttribute('href', './src/cv.pdf');
  resume.setAttribute('target', '_blank');
  resume.textContent = i18nInstance.t('home.links.resume');

  const github = document.createElement('a');
  github.setAttribute('href', 'https://github.com/WitsonBair');
  github.setAttribute('target', '_blank');
  github.textContent = i18nInstance.t('home.links.github');

  const headhunter = document.createElement('a');
  headhunter.setAttribute('href', 'https://ulan-ude.hh.ru/applicant/resumes/view?resume=00e69609ff0c0d9f510039ed1f766d53585167');
  headhunter.setAttribute('target', '_blank');
  headhunter.textContent = i18nInstance.t('home.links.headhunter');

  const linkedin = document.createElement('a');
  linkedin.setAttribute('href', 'https://www.linkedin.com/in/bair-tsydendambaev-87b468122/');
  linkedin.setAttribute('target', '_blank');
  linkedin.textContent = i18nInstance.t('home.links.linkedin');

  linkContainer.appendChild(resume);
  linkContainer.appendChild(github);
  linkContainer.appendChild(headhunter);
  linkContainer.appendChild(linkedin);

  const skills = document.createElement('h3');
  skills.textContent = i18nInstance.t('home.skills');

  const jsSkillsContainer = document.createElement('p');
  jsSkillsContainer.classList.add('output');
  const js = document.createElement('span');
  js.classList.add('highlight');
  js.textContent = 'JavaScript: ';
  jsSkillsContainer.appendChild(js);
  const jsSkills = document.createElement('span');
  jsSkills.textContent = 'JavaScript, NodeJS, Jest';
  jsSkillsContainer.appendChild(jsSkills);

  const htmlSkillsContainer = document.createElement('p');
  htmlSkillsContainer.classList.add('output');
  const html = document.createElement('span');
  html.classList.add('highlight');
  html.textContent = 'HTML&CSS: ';
  htmlSkillsContainer.appendChild(html);
  const htmlSkills = document.createElement('span');
  htmlSkills.textContent = 'HTML, CSS, Sass, Bootstrap';
  htmlSkillsContainer.appendChild(htmlSkills);

  const otherSkillsContainer = document.createElement('p');
  otherSkillsContainer.classList.add('output');
  const other = document.createElement('span');
  other.classList.add('highlight');
  other.textContent = 'Other: ';
  otherSkillsContainer.appendChild(other);
  const otherSkills = document.createElement('span');
  otherSkills.textContent = 'Git, WebPack, GitHub Actions';
  otherSkillsContainer.appendChild(otherSkills);

  container.innerHTML = '';
  container.append(heroNameHeader, description, linkContainer);
  container.append(skills, jsSkillsContainer, htmlSkillsContainer, otherSkillsContainer);
  container.append(lngTogglerContainer);
};

export default async () => {
  const defaultLanguage = 'en';
  // каждый запуск приложения создаёт свой собственный объект i18n и работает с ним,
  // не меняя глобальный объект.
  const i18nInstance = i18n.createInstance();
  await i18nInstance.init({
    lng: defaultLanguage,
    debug: false,
    resources,
  });

  const state = {
    lng: defaultLanguage,
    clicksCount: 0,
  };

  const container = document.querySelector('.terminal');

  const watchedState = onChange(state, (path, value) => {
    switch (path) {
      // инициализированный объект i18n прокидывается параметром в рендер, чтобы использовать t.
      case 'lng': i18nInstance.changeLanguage(value).then(() => render(container, watchedState, i18nInstance));
        break;

      case 'clicksCount': render(container, watchedState, i18nInstance);
        break;

      default:
        break;
    }
  });

  render(container, watchedState, i18nInstance);
};
