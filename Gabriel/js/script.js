const carouselItems = document.querySelector('.carousel-items');
const carouselItem = document.querySelectorAll('.carousel-item');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let index = 0;
const totalItems = carouselItem.length;

carouselNext.addEventListener('click', () => {
  index++;
  if (index > totalItems - 1) {
    index = 0;
  }
  carouselItems.style.transform = `translateX(-${index * 20}%)`;
});

carouselPrev.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = totalItems - 1;
  }
  carouselItems.style.transform = `translateX(-${index * 20}%)`;
});
function showItem(index) {
  const items = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.carousel-dots span');

  items.forEach(item => {
    item.classList.remove('active');
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  items[index].classList.add('active');
  dots[index].classList.add('active');
}
