const carouselSlide = document.querySelector('.carousel-slides');
const carouselImg = carouselSlide.querySelectorAll('img');
const leftCarousel = document.querySelector('.left-carousel');
const leftCarouselSlides = leftCarousel.querySelectorAll('.left-carousel-slides');

const upButton = document.getElementById('up');
const downButton = document.getElementById('down');

// -------------------------

let leftCount = 1;
const leftSize = leftCarouselSlides[0].clientHeight;

leftCarousel.style.transform = 'translateY(' + (-leftSize * leftCount)+ 'px)'

function leftSlideUp(){
    if(leftCount >= leftCarouselSlides.length - 1 ){
        return;
    }
    leftCarousel.style.transition = 'transform 0.4s ease-in-out';
    leftCount++;
    
    leftCarousel.style.transform = 'translateY(' + (-leftSize * leftCount)+ 'px)'
}

function leftSlideDown(){
    if(leftCount <=0){
        return ;
    }
    leftCarousel.style.transition = 'transform 0.4s ease-in-out';
    leftCount--;
    
    leftCarousel.style.transform = 'translateY(' + (-leftSize * leftCount)+ 'px)'
}

leftCarousel.addEventListener('transitionend', () => {
    if(leftCarouselSlides[leftCount].id === "yogaLast"){
        leftCarousel.style.transition = 'none';
        leftCount = leftCarouselSlides.length - 2;
        leftCarousel.style.transform = 'translateY(' + (-leftSize * leftCount)+ 'px)'
    }

    if(leftCarouselSlides[leftCount].id === "motorBikeFirst"){
        leftCarousel.style.transition = 'none';
        leftCount = leftCarouselSlides.length - leftCount;
        leftCarousel.style.transform = 'translateY(' + (-leftSize * leftCount)+ 'px)'
    }
})


// -----------------------------------

let counter = 1;
const size = carouselImg[0].clientHeight;

carouselSlide.style.transform = 'translateY(' + (-size * counter)+ 'px)'

function rightSlideUp(){
    if(counter >= carouselImg.length - 1 ){
        return;
    }
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    
    carouselSlide.style.transform = 'translateY(' + (-size * counter)+ 'px)'
}

function rightSlideDown(){
    if(counter <=0){
        return ;
    }
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    
    carouselSlide.style.transform = 'translateY(' + (-size * counter)+ 'px)'
}


upButton.addEventListener('click', () =>{
    rightSlideUp();
    leftSlideDown();
});

downButton.addEventListener('click', () => {
    rightSlideDown();
    leftSlideUp()
});


carouselSlide.addEventListener('transitionend', () => {
    if(carouselImg[counter].id === "lastOne"){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length - 2;
        carouselSlide.style.transform = 'translateY(' + (-size * counter)+ 'px)'
    }

    if(carouselImg[counter].id === "firstOne"){
        carouselSlide.style.transition = 'none';
        counter = carouselImg.length - counter;
        carouselSlide.style.transform = 'translateY(' + (-size * counter)+ 'px)'
    }
})