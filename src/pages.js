import home from '../index.htm?raw';
import italianHome from '../it.html?raw';
import about from '../about.html?raw';
import italianAbout from '../it/about.html?raw';
import services from '../services.html?raw';
import italianServices from '../it/services.html?raw';
import contact from '../contact.html?raw';
import italianContact from '../it/contact.html?raw';
import work from '../work.html?raw';
import italianWork from '../it/work.html?raw';
import work1 from '../work-1.html?raw';
import work2 from '../work-2.html?raw';
import work3 from '../work-3.html?raw';
import work4 from '../work-4.html?raw';
import work5 from '../work-5.html?raw';
import work6 from '../work-6.html?raw';
import italianWork1 from '../it/work-1.html?raw';
import italianWork2 from '../it/work-2.html?raw';
import italianWork3 from '../it/work-3.html?raw';
import italianWork4 from '../it/work-4.html?raw';
import italianWork5 from '../it/work-5.html?raw';
import italianWork6 from '../it/work-6.html?raw';
import privacy from '../legals/privacy-policy.html?raw';
import cookies from '../legals/cookie-policy.html?raw';
import italianPrivacy from '../it/legals/privacy-policy.html?raw';
import italianCookies from '../it/legals/cookie-policy.html?raw';

const routeAliases = {
  'index.htm': '/',
  'index.html': '/',
  'it.html': '/it',
  'about.html': '/about',
  'services.html': '/services',
  'contact.html': '/contact',
  'work.html': '/work',
  'work-1.html': '/work-1',
  'work-2.html': '/work-2',
  'work-3.html': '/work-3',
  'work-4.html': '/work-4',
  'work-5.html': '/work-5',
  'work-6.html': '/work-6',
  'legals/privacy-policy.html': '/legals/privacy-policy',
  'legals/cookie-policy.html': '/legals/cookie-policy',
  'it/about.html': '/it/about',
  'it/services.html': '/it/services',
  'it/contact.html': '/it/contact',
  'it/work.html': '/it/work',
  'it/work-1.html': '/it/work-1',
  'it/work-2.html': '/it/work-2',
  'it/work-3.html': '/it/work-3',
  'it/work-4.html': '/it/work-4',
  'it/work-5.html': '/it/work-5',
  'it/work-6.html': '/it/work-6',
  'it/legals/privacy-policy.html': '/it/legals/privacy-policy',
  'it/legals/cookie-policy.html': '/it/legals/cookie-policy',
};

const pages = {
  '/': { markup: home, title: 'ARCHICRAFT | Homepage', locale: 'en' },
  '/it': { markup: italianHome, title: 'ARCHICRAFT | Homepage', locale: 'it' },
  '/about': { markup: about, title: 'ARCHICRAFT | About', locale: 'en' },
  '/it/about': { markup: italianAbout, title: 'ARCHICRAFT | Chi siamo', locale: 'it' },
  '/services': { markup: services, title: 'ARCHICRAFT | Services', locale: 'en' },
  '/it/services': { markup: italianServices, title: 'ARCHICRAFT | Servizi', locale: 'it' },
  '/contact': { markup: contact, title: 'ARCHICRAFT | Contact', locale: 'en' },
  '/it/contact': { markup: italianContact, title: 'ARCHICRAFT | Contatti', locale: 'it' },
  '/work': { markup: work, title: 'ARCHICRAFT | Work', locale: 'en' },
  '/it/work': { markup: italianWork, title: 'ARCHICRAFT | Work', locale: 'it' },
  '/work-1': { markup: work1, title: 'ARCHICRAFT | Work', locale: 'en' },
  '/work-2': { markup: work2, title: 'ARCHICRAFT | Work', locale: 'en' },
  '/work-3': { markup: work3, title: 'ARCHICRAFT | Work', locale: 'en' },
  '/work-4': { markup: work4, title: 'ARCHICRAFT | Work', locale: 'en' },
  '/work-5': { markup: work5, title: 'ARCHICRAFT | Work', locale: 'en' },
  '/work-6': { markup: work6, title: 'ARCHICRAFT | Work', locale: 'en' },
  '/it/work-1': { markup: italianWork1, title: 'ARCHICRAFT | Work', locale: 'it' },
  '/it/work-2': { markup: italianWork2, title: 'ARCHICRAFT | Work', locale: 'it' },
  '/it/work-3': { markup: italianWork3, title: 'ARCHICRAFT | Work', locale: 'it' },
  '/it/work-4': { markup: italianWork4, title: 'ARCHICRAFT | Work', locale: 'it' },
  '/it/work-5': { markup: italianWork5, title: 'ARCHICRAFT | Work', locale: 'it' },
  '/it/work-6': { markup: italianWork6, title: 'ARCHICRAFT | Work', locale: 'it' },
  '/legals/privacy-policy': { markup: privacy, title: 'ARCHICRAFT | Privacy policy', locale: 'en' },
  '/legals/cookie-policy': { markup: cookies, title: 'ARCHICRAFT | Cookie policy', locale: 'en' },
  '/it/legals/privacy-policy': { markup: italianPrivacy, title: 'ARCHICRAFT | Privacy policy', locale: 'it' },
  '/it/legals/cookie-policy': { markup: italianCookies, title: 'ARCHICRAFT | Cookie policy', locale: 'it' },
  '/ta': { markup: home, title: 'ARCHICRAFT | முகப்பு', locale: 'ta' },
  '/ta/about': { markup: about, title: 'ARCHICRAFT | எங்களைப் பற்றி', locale: 'ta' },
  '/ta/services': { markup: services, title: 'ARCHICRAFT | சேவைகள்', locale: 'ta' },
  '/ta/contact': { markup: contact, title: 'ARCHICRAFT | தொடர்பு', locale: 'ta' },
  '/ta/work': { markup: work, title: 'ARCHICRAFT | பணிகள்', locale: 'ta' },
  '/ta/work-1': { markup: work1, title: 'ARCHICRAFT | பணிகள்', locale: 'ta' },
  '/ta/work-2': { markup: work2, title: 'ARCHICRAFT | பணிகள்', locale: 'ta' },
  '/ta/work-3': { markup: work3, title: 'ARCHICRAFT | பணிகள்', locale: 'ta' },
  '/ta/work-4': { markup: work4, title: 'ARCHICRAFT | பணிகள்', locale: 'ta' },
  '/ta/work-5': { markup: work5, title: 'ARCHICRAFT | பணிகள்', locale: 'ta' },
  '/ta/work-6': { markup: work6, title: 'ARCHICRAFT | பணிகள்', locale: 'ta' },
  '/ta/legals/privacy-policy': { markup: privacy, title: 'ARCHICRAFT | தனியுரிமைக் கொள்கை', locale: 'ta' },
  '/ta/legals/cookie-policy': { markup: cookies, title: 'ARCHICRAFT | குக்கீ கொள்கை', locale: 'ta' },
};

export function normalizePath(pathname) {
  const withoutTrailingSlash = pathname.replace(/\/+$/, '');
  return withoutTrailingSlash || '/';
}

export function getPage(pathname) {
  const path = normalizePath(pathname);
  return pages[path] || pages['/'];
}

export function getBodyClass(markup) {
  return markup.match(/<body[^>]*class=["']([^"']*)["']/i)?.[1] || '';
}

function localizeRoute(route, locale) {
  if (locale !== 'ta' || route === '/ta' || route.startsWith('/ta/')) return route;
  return route === '/' ? '/ta' : `/ta${route}`;
}

function routeWithoutLocale(pathname) {
  const normalized = normalizePath(pathname);
  if (normalized === '/ta') return '/';
  return normalized.startsWith('/ta/') ? normalized.slice(3) : normalized;
}

function applyHomepageThanjavurRebrand(markup) {
  const detailImage = '696a99fdabc03596762256a7/thanjavur-brihadisvara-detail.png';

  return markup
    .replaceAll('From Milan, Since 2010', 'From Thanjavur, Rooted in Craft')
    .replace(
      /<img\b(?=[^>]*\bclass=["']content1_image["'])[^>]*>/i,
      `<img width="415" sizes="(max-width: 479px) 100vw, (max-width: 991px) 49vw, 415px" alt="Detailed granite carvings and the vimana of Brihadisvara Temple in Thanjavur" src="${detailImage}" loading="lazy" class="content1_image">`,
    )
    .replace(
      'We understand the poetry of your design, the proportions, textures and light behind every line.',
      'We draw from the architectural poetry of Thanjai Periya Kovil—the proportion, texture and light held in every carved line.',
    )
    .replace(
      'We deliver the engineering with discipline: one partner, one touchpoint, full responsibility.',
      'We carry that discipline into every interior: one partner, one touchpoint, full responsibility.',
    )
    .replace(
      'Made in India by master artisans, our work protects your vision, your timelines and your reputation.',
      'Made in India by master artisans, our work transforms the spirit of South Indian craftsmanship into contemporary spaces with precision, warmth and permanence.',
    );
}

function rewriteInternalUrl(value, locale = 'en') {
  if (!value || /^(?:#|\/|https?:|mailto:|tel:|data:|javascript:)/i.test(value)) {
    return value;
  }

  const [pathAndQuery, hash = ''] = value.split('#');
  const [rawPath, query = ''] = pathAndQuery.split('?');
  const cleanPath = decodeURIComponent(rawPath).replace(/^\.\//, '').replace(/^(?:\.\.\/)+/, '');
  const route = routeAliases[cleanPath];

  if (route) {
    const localizedRoute = localizeRoute(route, locale);
    return `${localizedRoute}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
  }

  return `/${cleanPath}${query ? `?${query}` : ''}${hash ? `#${hash}` : ''}`;
}

function rewriteSrcset(value, locale) {
  return value
    .split(',')
    .map((candidate) => {
      const parts = candidate.trim().split(/\s+/);
      parts[0] = rewriteInternalUrl(parts[0], locale);
      return parts.join(' ');
    })
    .join(', ');
}

function setAttribute(attributes, name, value) {
  const pattern = new RegExp(`(\\s${name}\\s*=\\s*)(["'])[^"']*\\2`, 'i');
  if (pattern.test(attributes)) {
    return attributes.replace(pattern, `$1"${value}"`);
  }
  return `${attributes} ${name}="${value}"`;
}

function setCurrentLocaleClass(attributes, isCurrent) {
  return attributes.replace(/(\sclass\s*=\s*)(["'])([^"']*)\2/i, (_, prefix, quote, value) => {
    const withoutCurrent = value.replace(/\s+w--current\b/gi, '');
    return `${prefix}${quote}${isCurrent ? `${withoutCurrent} w--current` : withoutCurrent}${quote}`;
  });
}

function updateLocaleLinks(markup, locale, currentPath) {
  const englishRoute = routeWithoutLocale(currentPath);
  const tamilRoute = localizeRoute(englishRoute, 'ta');
  let localeLinkIndex = 0;

  return markup.replace(
    /<a\b([^>]*\bclass=(['"])[^"']*\blocale-link\b[^"']*\2[^>]*)>([\s\S]*?)<\/a>/gi,
    (_, attributes) => {
      const isTamilLink = localeLinkIndex % 2 === 1;
      const isCurrent = locale === 'ta' ? isTamilLink : !isTamilLink;
      localeLinkIndex += 1;

      let nextAttributes = setAttribute(attributes, 'hreflang', isTamilLink ? 'ta' : 'en');
      nextAttributes = setAttribute(nextAttributes, 'href', isTamilLink ? tamilRoute : englishRoute);
      nextAttributes = nextAttributes.replace(/\saria-current\s*=\s*(["'])page\1/gi, '');
      nextAttributes = setCurrentLocaleClass(nextAttributes, isCurrent);

      return `<a${nextAttributes}>${isTamilLink ? 'TA' : 'EN'}</a>`;
    },
  );
}

const tamilTranslations = [
  ['From an idea', 'ஒரு யோசனையிலிருந்து'],
  ['To a Masterpiece', 'ஒரு தலைசிறந்த படைப்பாக'],
  ['Your next masterpiece is crafted here', 'உங்கள் அடுத்த தலைசிறந்த படைப்பு இங்கே உருவாகிறது'],
  ['Bespoke interiors, expertly crafted', 'திறமையாக உருவாக்கப்பட்ட தனிப்பயன் உட்புறங்கள்'],
  ['Different contexts same standards', 'வேறு சூழல்கள், ஒரே தரநிலைகள்'],
  ['Privacy Policy', 'தனியுரிமைக் கொள்கை'],
  ['Cookie Policy', 'குக்கீ கொள்கை'],
  ['Residential', 'குடியிருப்பு'],
  ['Commercial', 'வணிகம்'],
  ['Marine', 'கடல்'],
  ['Home', 'முகப்பு'],
  ['Services', 'சேவைகள்'],
  ['Work', 'பணிகள்'],
  ['About', 'எங்களைப் பற்றி'],
  ['Contact', 'தொடர்பு'],
  ['Next', 'அடுத்து'],
  ['Previous', 'முந்தையது'],
  ['start a project', 'ஒரு திட்டத்தைத் தொடங்குங்கள்'],
  ['Start a project', 'ஒரு திட்டத்தைத் தொடங்குங்கள்'],
];

function translateTamil(markup) {
  return tamilTranslations.reduce(
    (translated, [english, tamil]) => translated.replaceAll(english, tamil),
    markup,
  );
}

export function prepareMarkup(markup, locale = 'en', currentPath = '/') {
  const pageMarkup = routeWithoutLocale(currentPath) === '/'
    ? applyHomepageThanjavurRebrand(markup)
    : markup;
  const body = pageMarkup.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || pageMarkup;

  const prepared = body
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, '')
    .replace(/(\s(?:src|href))=(["'])(.*?)\2/gi, (_, attribute, quote, value) => (
      `${attribute}=${quote}${rewriteInternalUrl(value, locale)}${quote}`
    ))
    .replace(/(\s(?:srcset|imagesrcset))=(["'])(.*?)\2/gi, (_, attribute, quote, value) => (
      `${attribute}=${quote}${rewriteSrcset(value, locale)}${quote}`
    ));

  const withLocaleLinks = updateLocaleLinks(prepared, locale, currentPath);
  return locale === 'ta' ? translateTamil(withLocaleLinks) : withLocaleLinks;
}
