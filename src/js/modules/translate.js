export default function translate() {
  const body = document.querySelector("body");
  const languages = document.querySelectorAll(".lang-item");

  function changeLanguage() {
    let ls = localStorage.getItem("lang");
    let actual = ls ? ls : "eng";

    body.classList.forEach((item) => body.classList.remove(item));
    body.classList.add(actual);
    localStorage.setItem("lang", actual);

    languages.forEach((item) => {
      item.querySelector("span").classList.remove("active");
    });
    document
      .querySelector(`[data-lang=${actual}]`)
      .querySelector("span")
      .classList.add("active");
  }
  changeLanguage();

  languages.forEach((item) => {
    item.addEventListener("click", ({ target }) => {
      const selection = target.innerHTML;

      switch (selection) {
        case "Português":
          localStorage.setItem("lang", "br");
          break;
        case "English":
          localStorage.setItem("lang", "eng");
          break;
      }

      changeLanguage();
    });
  });
}
