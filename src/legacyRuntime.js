const legacyScriptSources = [
  '/js/jquery-3.5.1.min.dc5e7f18c8.js',
  '/696a99fdabc03596762256a7/js/webflow.schunk.c42549641b7d4501.js',
  '/696a99fdabc03596762256a7/js/webflow.schunk.f383f5e6d5965c7d.js',
  '/696a99fdabc03596762256a7/js/webflow.692183ef.2c65a6d42a797b93.js',
  '/gsap/3.15.0/gsap.min.js',
  '/gsap/3.15.0/ScrollTrigger.min.js',
  '/gsap/3.15.0/MotionPathPlugin.min.js',
  '/lenis@1.3.4/dist/lenis.min.js',
  '/jquery.validation/1.15.0/jquery.validate.min.js',
  '/npm/swiper@11/swiper-bundle.min.js',
];

let runtimePromise;

function loadScript(source) {
  const existing = document.querySelector(`script[data-archicraft-runtime="${source}"]`);
  if (existing) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = source;
    script.dataset.archicraftRuntime = source;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Unable to load ${source}`));
    document.body.appendChild(script);
  });
}

export function startLegacyRuntime() {
  if (!runtimePromise) {
    runtimePromise = (async () => {
      for (const source of legacyScriptSources) {
        await loadScript(source);
      }

      window.gsap?.registerPlugin(window.ScrollTrigger, window.MotionPathPlugin);

      const [main, homepage, menu, form, footerDate, swiper, caseTransition, heroTrail] = await Promise.all([
        import('../site-js/main.js'),
        import('../site-js/homepage.js'),
        import('../site-js/menu.js'),
        import('../site-js/form.js'),
        import('../site-js/footer-date.js'),
        import('../site-js/swiper.js'),
        import('../site-js/case-transition.js'),
        import('../site-js/homepage-hero-trail.js'),
      ]);

      // The original custom runtime owns the old navigation, hero, scroll,
      // accordion, form, footer, and Swiper behaviors. The third-party assets
      // are loaded once, but these page initializers can run on every route.
      return {
        initialize() {
          window.ScrollTrigger?.getAll?.().forEach((trigger) => trigger.kill());
          window.lenis?.destroy?.();
          heroTrail.homepageHeroTrail();
          main.mainInit();
          homepage.homepage();
          menu.navBarMenu();
          form.form();
          footerDate.footerDate();
          swiper.swiperInit();
          caseTransition.caseTransition();
        },
      };
    })();
  }

  return runtimePromise;
}
