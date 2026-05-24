window.addEventListener("load", () => {

  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  setTimeout(() => {

    // Fade out loader
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";

    // Fade in main content after loader fades
    setTimeout(() => {
      mainContent.classList.add("show");
    }, 100);

  }, 2500);

});
/* DARK MODE */

const toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const icon = toggle.querySelector("i");

  if(document.body.classList.contains("dark")){

    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");

  }else{

    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");

  }

});