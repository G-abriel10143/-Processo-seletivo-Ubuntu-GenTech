const carousel = document.querySelector('.carousel-items');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let position = 0;
const slideWidth = carousel.clientWidth / 3;
const slidesToScroll = 1;

prevButton.addEventListener('click', () => {
  const slidesToShow = Math.min(carousel.childElementCount, 3);
  position += slidesToScroll * slideWidth;
  position = Math.min(position, 0);
  carousel.style.transform = `translateX(${position}px)`;
});

nextButton.addEventListener('click', () => {
  const slidesToShow = Math.min(carousel.childElementCount, 3);
  position -= slidesToScroll * slideWidth;
  const lastPosition = -(carousel.childElementCount - slidesToShow) * slideWidth;
  position = Math.max(position, lastPosition);
  carousel.style.transform = `translateX(${position}px)`;
});
