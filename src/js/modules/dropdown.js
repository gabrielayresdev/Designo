export default function initDropdown() {
  const dropdown = document.querySelector("[data-dropdown=nav]");
  const control = document.querySelector(".menuControl");
  const burger = document.querySelector("[data-dropdown=burger]");
  const close = document.querySelector("[data-dropdown=close]");

  let actualHeight;
  function handleScroll() {
    window.scrollTo(0, actualHeight);
  }
  function handleClick() {
    dropdown.classList.toggle("active");
    const isOpen = dropdown.classList.contains("active");
    burger.classList.toggle("active");
    close.classList.toggle("active");

    actualHeight = window.scrollY;

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }
  }
  control.addEventListener("click", handleClick);
}
