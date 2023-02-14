let loginButton = document.querySelector('.login-button');

let formBackground = document.querySelector('.form-background');

loginButton.addEventListener('click', showPopUp);

function showPopUp (evt) {
  evt.preventDefault();
  formBackground.style.display = 'block';
};



let closePopUp = document.querySelector('.popup-close');

closePopUp.addEventListener('click', () => {
  formBackground.style.display = 'none'
});