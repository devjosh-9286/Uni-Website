/* main.js — MDSU shared site JS */

// Helper: create DOM element with props and optional children
function createEl(tag, props, children) {
  const el = document.createElement(tag);
  Object.entries(props || {}).forEach(([k, v]) => {
    if (k === 'textContent') el.textContent = v;
    else el.setAttribute(k.replace(/([A-Z])/g, '-$1').toLowerCase(), v);
  });
  (children || []).forEach(child => {
    if (typeof child === 'string') el.insertAdjacentHTML('beforeend', child);
    else el.appendChild(child);
  });
  return el;
}

// Mobile nav drawer
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  if (!toggle || document.getElementById('mobile-drawer')) return;

  const drawer = document.createElement('div');
  drawer.id = 'mobile-drawer';
  drawer.setAttribute('aria-hidden', 'true');
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-label', 'Navigation menu');

  const primaryNav = document.querySelector('.primary-nav');
  if (!primaryNav) return;

  const navClone = primaryNav.cloneNode(true);
  navClone.className = 'drawer-nav-list';
  navClone.querySelectorAll('.dropdown').forEach(d => {
    d.style.cssText = 'position:static;opacity:1;visibility:visible;transform:none;box-shadow:none;border:none;border-radius:0;';
  });

  const closeBtn = createEl('button', { class: 'drawer-close', 'aria-label': 'Close menu' },
    ['<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 2l14 14M16 2L2 16"/></svg>']);

  const drawerHead = createEl('div', { class: 'drawer-head' }, [
    createEl('span', { class: 'drawer-logo-name', textContent: 'MDS University' }),
    closeBtn
  ]);

  const drawerNav = createEl('nav', { 'aria-label': 'Mobile navigation' }, [navClone]);
  const drawerInner = createEl('div', { class: 'drawer-inner' }, [drawerHead, drawerNav]);
  const backdrop = createEl('div', { class: 'drawer-backdrop' });

  drawer.appendChild(drawerInner);
  drawer.appendChild(backdrop);
  document.body.appendChild(drawer);

  function openDrawer() {
    drawer.setAttribute('aria-hidden', 'false');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    toggle.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }
  function closeDrawer() {
    drawer.setAttribute('aria-hidden', 'true');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }

  toggle.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });
}

// Stats counter animation
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString('en-IN') + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// Dark mode toggle
function initDarkMode() {
  const btn = document.getElementById('dark-mode-toggle');
  if (!btn) return;
  const stored = localStorage.getItem('mdsu-theme');
  const icon = btn.querySelector('.dm-icon');

  function setTheme(dark) {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('mdsu-theme', dark ? 'dark' : 'light');
    btn.setAttribute('aria-pressed', String(dark));
    if (icon) icon.textContent = dark ? '☀' : '☾';
  }

  setTheme(stored === 'dark');
  btn.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme !== 'dark');
  });
}

// Shared tab switching (works for any [role="tab"])
function initTabs() {
  const tabs = document.querySelectorAll('[role="tab"]');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.closest('[role="tablist"]');
      const allTabs = group ? group.querySelectorAll('[role="tab"]') : tabs;
      allTabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      document.querySelectorAll('[role="tabpanel"]').forEach(p => { p.classList.remove('active'); p.hidden = true; });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      if (panel) { panel.classList.add('active'); panel.hidden = false; }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initCounters();
  initDarkMode();
  initTabs();
});
