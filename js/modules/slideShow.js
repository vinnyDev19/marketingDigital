export default function initSlideShow() {
  const slider = document.querySelectorAll(".slider");
  const btnPrev = document.getElementById("prev-button");
  const btnNext = document.getElementById("next-button");

  let correnteSlide = 0;

  function esconderSlider() {
    slider.forEach((item) => {
      item.classList.remove("on");
    });
  }

  function mostrarSlider() {
    slider[correnteSlide].classList.add("on");
  }
  function avancarSlide() {
    esconderSlider();
    if (correnteSlide == slider.length - 1) {
      correnteSlide = 0;
    } else {
      correnteSlide++;
    }
    mostrarSlider();
  }
  function voltarSlide() {
    esconderSlider();
    if (correnteSlide == 0) {
      correnteSlide = slider.length - 1;
    } else {
      correnteSlide--;
    }
    mostrarSlider();
  }
  setInterval(avancarSlide, 5000)

  btnNext.addEventListener("click", avancarSlide);
  btnPrev.addEventListener("click", voltarSlide);
}
