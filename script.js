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
menuButton?.addEventListener('click', () => nav?.classList.contains('open') ? closeMenu() : openMenu());
menuClose?.addEventListener('click', () => closeMenu());
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', (event) => {
  if (!nav?.classList.contains('open')) return;
  if (event.key === 'Escape') { event.preventDefault(); closeMenu(); return; }
  if (event.key !== 'Tab') return;
  const focusable = [...nav.querySelectorAll('button, a[href]')].filter((element) => !element.disabled);
  const first = focusable[0]; const last = focusable.at(-1);
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});

const dialog = document.querySelector('.poc-dialog');
const dialogMessage = document.querySelector('.poc-dialog-message');
const showNotice = (notice) => { if (dialog && dialogMessage) { dialogMessage.textContent = notice; dialog.showModal(); } };
dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
document.querySelectorAll('.utilities button').forEach((button) => button.addEventListener('click', () => showNotice('This control is not connected in this proof of concept.')));
document.querySelectorAll('[data-notice]').forEach((button) => button.addEventListener('click', () => showNotice(button.dataset.notice)));

const form = document.querySelector('form');
const email = document.querySelector('#email');
const message = document.querySelector('.form-message');
if (email && message) { message.id = 'email-message'; email.setAttribute('aria-describedby', 'email-message'); }
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!email?.validity.valid) { message.textContent = 'Enter a valid email address to join the list.'; message.className = 'form-message error'; email.setAttribute('aria-invalid', 'true'); email.focus(); return; }
  message.textContent = 'This proof of concept does not submit data.'; message.className = 'form-message'; email.removeAttribute('aria-invalid');
});

document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const mainImage = gallery.querySelector('.gallery-main-image');
  const thumbnails = [...gallery.querySelectorAll('.gallery-thumb')];
  const announcement = gallery.querySelector('.gallery-announcement');
  const selectImage = (thumbnail) => {
    if (!mainImage) return;
    mainImage.src = thumbnail.dataset.imageSrc;
    mainImage.alt = thumbnail.dataset.imageAlt;
    if (announcement) announcement.textContent = thumbnail.dataset.imageAlt;
    thumbnails.forEach((button) => {
      const selected = button === thumbnail;
      button.classList.toggle('is-current', selected);
      if (selected) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
      button.querySelector('.sr-only')?.remove();
    });
    const currentText = document.createElement('span');
    currentText.className = 'sr-only';
    currentText.textContent = 'Current image';
    thumbnail.append(currentText);
  };
  thumbnails.forEach((thumbnail) => thumbnail.addEventListener('click', () => selectImage(thumbnail)));
});
