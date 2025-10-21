const toogleTheme = document.getElementById("toogleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

toogleTheme.addEventListener("click", () => {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === "dark") rootHtml.setAttribute("data-theme", "light");
    else rootHtml.setAttribute("data-theme", "dark");
    toogleTheme.classList.toggle("bi-sun");
    toogleTheme.classList.toggle("bi-moon-stars");
})

accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const accordionActive = accordionItem.classList.contains("active");
  
      accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
  })
  
  menuLinks.forEach(item => {
    item.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    })
  })