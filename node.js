const openPopUps = document.querySelectorAll('.pop-up-open');
const closePopUps = document.querySelectorAll('.pop-up-close');
const popUps = document.querySelectorAll('.pop-up');

openPopUps.forEach(openBtn => {
  openBtn.addEventListener('click', () => {
    const popupId = openBtn.getAttribute('data-popup');
    const popUp = document.querySelector(`.pop-up[data-popup="${popupId}"]`);
    if (popUp) {
      popUp.classList.add('active');
    }
  });
});

closePopUps.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const popupId = closeBtn.getAttribute('data-popup');
    const popUp = document.querySelector(`.pop-up[data-popup="${popupId}"]`);
    if (popUp) {
      popUp.classList.remove('active');
    }
  });
});