const body = document.querySelector('body');
const nav = document.querySelector('.navigation');

function isNavigation() {
  const navBtn = document.querySelector('.navigation__btn');
  const navBtnClose = document.querySelector('.navigation__close');

  navBtn.addEventListener('click', () => {
    nav.classList.add('active');
    body.classList.add('lock');
  });
  navBtnClose.addEventListener('click', () => {
    nav.classList.remove('active');
    body.classList.remove('lock');
  });
}

isNavigation();
