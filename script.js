let images = [
  {
    url: "./images/image-1.jpg",
    city: "Rostov-on-Don LCD admiral",
    area: "81 m2",
    time: "3.5 months",
  },
  {
    url: "./images/image-2.jpg",
    city: "Sochi Thieves",
    area: "105 m2",
    time: "4 months",
  },
  {
    url: "./images/image-3.jpg",
    city: "Rostov-on-Don Patriotic",
    area: "93 m2",
    time: "3 months",
  },
];

function initSlider() {
  if (!images || !images.length) return;

  let sliderImages = document.querySelector(".slider-container-right");
  let sliderArrows = document.querySelector(".slider-nav");
  let sliderDots = document.querySelector(".slider-dots");
  let sliderLinks = document.querySelector(".projects-menu");

  let statisticCity = document.querySelector(".town");
  let statisticArea = document.querySelector(".location");
  let statisticTime = document.querySelector(".months");

  initImages();
  initArrows();
  initDots();
  initLinks();
  initTitles();
  initAutoplay();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="item n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
    sliderArrows.querySelectorAll(".slider__arrow").forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("prev")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="slider-dots_item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider-dots_item").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initLinks() {
    sliderLinks.querySelectorAll(".projects-menu-link").forEach((link) => {
      link.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    sliderLinks.querySelector(".action").classList.remove("action");
    sliderLinks.querySelector(".n" + num).classList.add("action");

    changeTitle(num);
  }

  function initTitles() {
    let cityDiv = `<p class="city">${images[0].city}</p>`;
    statisticCity.innerHTML += cityDiv;
    let areaDiv = `<p class="area">${images[0].area}</p>`;
    statisticArea.innerHTML += areaDiv;
    let timeDiv = `<p class="time">${images[0].time}</p>`;
    statisticTime.innerHTML += timeDiv;
  }

  function changeTitle(num) {
    if (!images[num].city) return;
    let cityTitle = document.querySelector(".city");
    cityTitle.innerText = images[num].city;
    let areaTitle = document.querySelector(".area");
    areaTitle.innerText = images[num].area;
    let timeTitle = document.querySelector(".time");
    timeTitle.innerText = images[num].time;
  }

  function initAutoplay() {
    setInterval(() => {
      let curNumber = +sliderImages.querySelector(".active").dataset.index;
      let nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
      moveSlider(nextNumber);
    }, 4000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});
