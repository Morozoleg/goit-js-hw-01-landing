import refs from './refs';

refs.openPopupBtn.addEventListener('click', () => {
  document.body.classList.add('show-popup');
});

refs.closePopupBtn.addEventListener('click', () => {
  document.body.classList.remove('show-popup');
});
