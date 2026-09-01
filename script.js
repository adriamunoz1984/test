const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
const menuLabel = menuButton?.querySelector('.sr-only');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuLabel.textContent = open ? 'Close menu' : 'Open menu';
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuLabel) menuLabel.textContent = 'Open menu';
}));

const form = document.querySelector('form');
const email = document.querySelector('#email');
const message = document.querySelector('.form-message');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!email.validity.valid) {
    message.textContent = 'Enter a valid email address to join the list.';
    message.className = 'form-message error';
    email.setAttribute('aria-invalid', 'true');
    email.focus();
    return;
  }
  message.textContent = 'Thanks — this proof of concept does not submit data.';
  message.className = 'form-message success';
  email.removeAttribute('aria-invalid');
});
