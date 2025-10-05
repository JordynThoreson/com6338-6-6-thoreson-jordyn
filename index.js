const burgerBtn = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.hamburger-menu');

menu.classList.remove('show-menu');
burgerBtn.setAttribute('aria-expanded', 'false');

function openMenu() {
  menu.classList.add('show-menu');
  burgerBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  menu.classList.remove('show-menu');
  burgerBtn.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
  if (menu.classList.contains('show-menu')) {
    closeMenu();
  } else {
    openMenu();
  }
}

burgerBtn.addEventListener('click', (e) => {
  toggleMenu();
})

document.addEventListener('click', (e) => {
  if (menu.classList.contains('show-menu')) {
    const clickedInside = menu.contains(e.target);
    const clickedBtn = burgerBtn.contains(e.target);
    if (!clickedInside && !clickedBtn) {
      closeMenu();
    }
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('show-menu')) {
    closeMenu();
    burgerBtn.focus();
  }
})