// let mePhoto = document.querySelector('.me-photo');

// let photo1 = document.querySelector('.myphoto1')

// photo1.addEventListener('click', largePhoto);

// function largePhoto (evt) {
//   document.getElementsByClassName('me-photo').src = photo1;
// }

// mePhoto.onMouseOver = document.getElementsByName('img').src = 'photo_1.jpg';

// onMouseOver="document.getElementsByClassName('me-photo').src = 'photo_1.jpg'";
// onMouseOut="document.getElementsByClassName('me-photo').src = 'Rectangle.png'";

let otherPhotos = document.querySelectorAll('.test');

otherPhotos.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item.outerHTML);
    mePhoto.innerHTML = `<img class="me-photo" src="${item.src}" title="Камиль">`
    console.log(mePhoto);
  })
})

console.log(otherPhotos);