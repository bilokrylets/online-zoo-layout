/* eslint-disable function-paren-newline */
const carousel = document.querySelector('.cards-content-line.first');
const carousel2 = document.querySelector('.cards-content-line.second');
const firstCard = carousel.querySelectorAll('.animal-card')[0];
const secondCard = carousel.querySelectorAll('.animal-card')[1];
const arrowIcons = document.querySelectorAll('.cards-arrow ');

const gap = Math.abs(
  firstCard.offsetLeft + firstCard.clientWidth - secondCard.offsetLeft);

const CardWidth = firstCard.clientWidth + gap;

const showHideIcons = () => {
  const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
  if (carousel.scrollLeft <= 0) {
    arrowIcons[0].classList.add('unactive');
  } else {
    arrowIcons[0].classList.remove('unactive');
  }

  if (carousel.scrollLeft >= scrollWidth - 200) {
    arrowIcons[1].classList.add('unactive');
  } else {
    arrowIcons[1].classList.remove('unactive');
  }
};

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    carousel.scrollLeft += icon.id === 'arrowLeft' ? -CardWidth : CardWidth;
    carousel2.scrollLeft += icon.id === 'arrowLeft' ? -CardWidth : CardWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

// // dragging

// let isDragStart = false,
//     prevPageX,
//     prevScrollLeft,
//     positionDiff;

// const autoSlide = (e) => {
//     if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return

//     positionDiff = Math.abs(positionDiff);
//     let validDifference = firstCardWidth - positionDiff;

//     if(carousel.scrollLeft > prevScrollLeft) {
//         return carousel.scrollLeft += positionDiff > firstCardWidth / 3 ? validDifference : -positionDiff
//     }
//     return carousel.scrollLeft -= positionDiff > firstCardWidth / 3 ? validDifference : -positionDiff

// }

// const dragStart = (e)=> {
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX
//     prevScrollLeft = carousel.scrollLeft
// }

// const dragging = (e) => {
//     if(!isDragStart) return
//     e.preventDefault()
//     carousel.classList.add('dragging')
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = (e)=> {
//     isDragStart = false;
//     carousel.classList.remove('dragging')
//     autoSlide();
// }

// carousel.addEventListener('mousedown',dragStart)
// carousel.addEventListener('touchstart',dragStart)

// carousel.addEventListener('mousemove', dragging)
// carousel.addEventListener('touchmove', dragging)

// carousel.addEventListener('mouseup', dragStop)
// carousel.addEventListener('mouseleave', dragStop)
// carousel.addEventListener('touchend', dragStop)
