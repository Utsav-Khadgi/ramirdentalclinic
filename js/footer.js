loadComponent('footer-placeholder', 'components/footer.html').then(ok => {
  if (!ok) return;
  document.getElementById('year').textContent = new Date().getFullYear();
  const top = document.querySelector('.float-top');
  window.addEventListener('scroll', () => top.classList.toggle('show', window.scrollY > 400));
  top.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
