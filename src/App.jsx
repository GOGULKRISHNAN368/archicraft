import { useEffect, useMemo, useRef, useState } from 'react';
import { getBodyClass, getPage, normalizePath, prepareMarkup } from './pages.js';
import { startLegacyRuntime } from './legacyRuntime.js';

function updateAccordion(item, open) {
  const content = item.querySelector('[pb-accordion-element="content"], [pb-accordion-element-menu="content"]');
  const trigger = item.querySelector('[pb-accordion-element="trigger"], [pb-accordion-element-menu="trigger"]');
  if (!content || !trigger) return;

  if (open) {
    content.style.display = 'block';
    content.style.visibility = 'visible';
    content.style.maxHeight = `${content.scrollHeight}px`;
    content.style.opacity = '1';
    item.classList.add('is-active-accordion');
    trigger.setAttribute('aria-expanded', 'true');
  } else {
    content.style.maxHeight = '0';
    content.style.opacity = '0';
    content.style.visibility = 'hidden';
    content.style.display = 'none';
    item.classList.remove('is-active-accordion');
    trigger.setAttribute('aria-expanded', 'false');
  }
}

function initializePageInteractions(root) {
  const cleanups = [];
  const menuTrigger = root.querySelector('#menu-trigger');
  const mobileMenu = root.querySelector('.mobile-dropdown-menu');

  if (menuTrigger && mobileMenu) {
    const toggleMenu = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = mobileMenu.classList.toggle('w--open');
      mobileMenu.style.display = isOpen ? 'flex' : 'none';
      mobileMenu.style.opacity = isOpen ? '1' : '0';
      document.body.classList.toggle('navbar-menu-open', isOpen);
      document.documentElement.classList.toggle('lock-viewport', isOpen);
    };

    menuTrigger.addEventListener('click', toggleMenu);
    cleanups.push(() => menuTrigger.removeEventListener('click', toggleMenu));
  }

  root.querySelectorAll('.mobile-dropdown-menu a').forEach((link) => {
    const closeMenu = () => {
      mobileMenu?.classList.remove('w--open');
      if (mobileMenu) {
        mobileMenu.style.display = 'none';
        mobileMenu.style.opacity = '0';
      }
      document.body.classList.remove('navbar-menu-open');
      document.documentElement.classList.remove('lock-viewport');
    };
    link.addEventListener('click', closeMenu);
    cleanups.push(() => link.removeEventListener('click', closeMenu));
  });

  root.querySelectorAll('[pb-component="accordion-faqs"], [pb-component-menu="accordion"]').forEach((accordion) => {
    const group = accordion.querySelector('[pb-accordion-element="group"], [pb-accordion-element-menu="group"]');
    if (!group) return;

    group.querySelectorAll('[pb-accordion-element="accordion"], [pb-accordion-element-menu="accordion"]').forEach((item) => {
      const trigger = item.querySelector('[pb-accordion-element="trigger"], [pb-accordion-element-menu="trigger"]');
      if (trigger) {
        updateAccordion(item, false);
        const toggleAccordion = (event) => {
          event.preventDefault();
          const opening = !item.classList.contains('is-active-accordion');
          if (group.getAttribute('pb-accordion-single') === 'true' || group.getAttribute('pb-accordion-single-menu') === 'true') {
            group.querySelectorAll('.is-active-accordion').forEach((activeItem) => updateAccordion(activeItem, false));
          }
          updateAccordion(item, opening);
        };
        trigger.addEventListener('click', toggleAccordion);
        cleanups.push(() => trigger.removeEventListener('click', toggleAccordion));
      }
    });
  });

  root.querySelectorAll('.filter_item').forEach((filter) => {
    const setActiveFilter = () => {
      root.querySelectorAll('.filter_item .tag').forEach((tag) => tag.classList.remove('active'));
      filter.querySelector('.tag')?.classList.add('active');
    };
    filter.addEventListener('click', setActiveFilter);
    cleanups.push(() => filter.removeEventListener('click', setActiveFilter));
  });

  root.querySelectorAll('form').forEach((form) => {
    const submitForm = (event) => {
      event.preventDefault();
      const requiredFields = [...form.querySelectorAll('[required]')];
      const valid = requiredFields.every((field) => field.value.trim());
      if (!valid) {
        form.classList.add('form-has-errors');
        return;
      }
      form.classList.remove('form-has-errors');
      form.closest('.w-form')?.querySelector('.w-form-done')?.style.setProperty('display', 'block');
      form.style.display = 'none';
    };
    form.addEventListener('submit', submitForm);
    cleanups.push(() => form.removeEventListener('submit', submitForm));
  });

  const preloader = root.querySelector('.preloader');
  const preloaderTimer = preloader
    ? window.setTimeout(() => {
        preloader.style.opacity = '0';
        window.setTimeout(() => preloader.remove(), 500);
      }, 250)
    : undefined;

  return () => {
    cleanups.forEach((cleanup) => cleanup());
    if (preloaderTimer) window.clearTimeout(preloaderTimer);
  };
}

export default function App() {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));
  const pageRoot = useRef(null);
  const page = getPage(pathname);
  const markup = useMemo(
    () => prepareMarkup(page.markup, page.locale, pathname),
    [page.markup, page.locale, pathname],
  );

  useEffect(() => {
    const handlePopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const root = pageRoot.current;
    if (!root) return undefined;

    document.title = page.title;
    document.documentElement.lang = page.locale === 'ta' ? 'ta' : page.locale === 'it' ? 'it' : 'en';
    document.documentElement.classList.add('w-mod-js');
    if ('ontouchstart' in window) {
      document.documentElement.classList.add('w-mod-touch');
    }
    document.body.className = `${getBodyClass(page.markup)} react-body`;
    window.scrollTo(0, 0);

    let cleanupInteractions = () => {};
    let cancelled = false;

    // Reuse the original site's runtime after React mounts its page markup.
    // This keeps the original hero/scroll/menu behavior instead of replacing
    // it with a new visual implementation.
    startLegacyRuntime()
      .then((runtime) => {
        if (!cancelled) runtime.initialize();
      })
      .catch(() => {
        if (!cancelled) cleanupInteractions = initializePageInteractions(root);
      });

    return () => {
      cancelled = true;
      cleanupInteractions?.();
      document.body.className = 'react-body';
    };
  }, [markup, page.markup, page.locale, page.title]);

  return (
    <div
      ref={pageRoot}
      className="react-page"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
