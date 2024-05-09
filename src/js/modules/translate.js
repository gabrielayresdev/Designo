export default function translate() {
  const body = document.querySelector("body");
  const languages = document.querySelectorAll(".lang-item");

  function changeLanguage() {
    let ls = localStorage.getItem("lang");
    let actual = ls ? ls : "eng";

    // Remove idioma atual do body e adiciona o salvo no localStorage
    body.classList.forEach((item) => body.classList.remove(item));
    body.classList.add(actual);
  }
  changeLanguage();

  languages.forEach((item) => {
    item.addEventListener("click", ({ target }) => {
      const selection = item.dataset.lang;
      console.log(item.dataset.lang)

      switch (selection) {
        case "br":
          localStorage.setItem("lang", "br");
          break;
        case "eng":
          localStorage.setItem("lang", "eng");
          break;
      }

      // Seleciona o idioma escolhido como active
      languages.forEach((option) => {
        option.querySelector(".option").classList.remove("active");
      });
      item.querySelector(".option").classList.add("active")


      changeLanguage();
    });
  });
}
