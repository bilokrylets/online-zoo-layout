const carousel = document.querySelector('.cards-content-line.first'),
    carousel2 = document.querySelector('.cards-content-line.second'),
    firstCard= carousel.querySelectorAll('.animal-card')[0],
    secondCard= carousel.querySelectorAll('.animal-card')[1],
    arrowIcons = document.querySelectorAll('.cards-arrow ');

let gap = Math.abs((firstCard.offsetLeft + firstCard.clientWidth) - secondCard.offsetLeft);

let CardWidth = firstCard.clientWidth + gap;


const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft <= 0  ? arrowIcons[0].classList.add('unactive') : arrowIcons[0].classList.remove('unactive')
    carousel.scrollLeft >= scrollWidth - 200 ? arrowIcons[1].classList.add('unactive') :  arrowIcons[1].classList.remove('unactive')
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click',()=> {
       
        carousel.scrollLeft += icon.id =='arrowLeft' ? -CardWidth : CardWidth;
        carousel2.scrollLeft += icon.id =='arrowLeft' ? -CardWidth : CardWidth;
        setTimeout(()=> showHideIcons(), 60);
    })
})




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

