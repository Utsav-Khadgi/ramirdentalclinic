async function loadComponent(placeholderId, path) {
  const el = document.getElementById(placeholderId);
  if (!el) return false;
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(res.status);
    el.innerHTML = await res.text();
    return true;
  } catch (e) {
    console.error('Could not load ' + path, e);
    return false;
  }
}

function initNavbar() {
  const btn = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  btn?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a:not(.btn)').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
}

loadComponent('navbar-placeholder', 'components/navbar.html').then(ok => ok && initNavbar());
