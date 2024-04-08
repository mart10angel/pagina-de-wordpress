const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const galleryList = document.querySelector('.gallery-list');
let rotateDeg = 0;

btnPrev.addEventListener('click', () => rotateGallery('prev'));
btnNext.addEventListener('click', () => rotateGallery('next'));

function rotateGallery(direction) {
  if(direction === 'prev') {
    rotateDeg += 45;
  } else {
    rotateDeg -= 45;
  }
  galleryList.style.transform = `perspective(2000px) rotateY(${rotateDeg}deg)`;
}