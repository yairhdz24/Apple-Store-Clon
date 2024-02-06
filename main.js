let currentIndex = 0;

function scrollImages(direction) {
  const imageWrapper = document.querySelector(".image-wrapper");
  const images = document.querySelectorAll(".image");

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const transformValue = -currentIndex * (100 + 20);
  imageWrapper.style.transform = `translateX(${transformValue}px)`;
}

