const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
const menuClose = document.querySelector('.menu-close');
const menuLabel = menuButton?.querySelector('.sr-only');
let menuReturnFocus = null;

const closeMenu = (returnFocus = true) => {
  if (!nav?.classList.contains('open')) return;
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuLabel) menuLabel.textContent = 'Open menu';
  if (returnFocus) menuReturnFocus?.focus();
};

const openMenu = () => {
  menuReturnFocus = document.activeElement;
  nav?.classList.add('open');
  menuButton?.setAttribute('aria-expanded', 'true');
  if (menuLabel) menuLabel.textContent = 'Close menu';
  menuClose?.focus();
};

menuButton?.addEventListener('click', () => {
  nav?.classList.contains('open') ? closeMenu() : openMenu();
});
menuClose?.addEventListener('click', () => closeMenu());
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu(false)));

document.addEventListener('keydown', (event) => {
  if (!nav?.classList.contains('open')) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closeMenu();
    return;
  }
  if (event.key !== 'Tab') return;
  const focusable = [...nav.querySelectorAll('button, a[href]')].filter((element) => !element.disabled);
  const first = focusable[0];
  const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const dialog = document.querySelector('.poc-dialog');
const dialogMessage = document.querySelector('.poc-dialog-message');
const showNotice = (message) => {
  if (!dialog || !dialogMessage) return;
  dialogMessage.textContent = message;
  dialog.showModal();
};
dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());

const notices = {
  search: 'Search is not connected in this proof of concept. Browse the featured objects and collections on this page instead.',
  account: 'Accounts are not available in this proof of concept. No sign-in or personal data is collected.',
  bag: 'Your shopping bag is empty. Checkout is not available in this proof of concept.'
};
document.querySelectorAll('.utilities button').forEach((button) => {
  const action = button.getAttribute('aria-label')?.startsWith('Search') ? 'search'
    : button.getAttribute('aria-label')?.startsWith('Account') ? 'account' : 'bag';
  button.addEventListener('click', () => showNotice(notices[action]));
});
document.querySelectorAll('.product-card button').forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.closest('.product-card')?.querySelector('h3')?.textContent ?? 'This product';
    showNotice(`${product} has no selectable options or checkout in this proof of concept.`);
  });
});

document.querySelectorAll('footer a[href="#privacy"], footer a[href="#accessibility"], footer a[href="#social"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showNotice(`${link.textContent.trim()} is not connected in this proof of concept.`);
  });
});

const form = document.querySelector('form');
const email = document.querySelector('#email');
const message = document.querySelector('.form-message');
const signupCopy = document.querySelector('.signup > div > p');
if (email && message) {
  message.id = 'email-message';
  signupCopy?.setAttribute('id', 'email-help');
  email.setAttribute('aria-describedby', 'email-help email-message');
}
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!email?.validity.valid) {
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
