export default function initMenuMobile() {
  const btnMobile = document.querySelector(".menu-mobile");

  btnMobile.addEventListener("click", toggleMenu);
  function toggleMenu() {
    const nav = document.querySelector(".menu");
    nav.classList.toggle("active");
  }
}
