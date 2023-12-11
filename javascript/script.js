const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

// window.addEventListener("load", sidenVises);

// function sidenVises() {
//   console.log(sidenVises);
//   document.querySelector(".burgerbillede").classList.add("hide");
//   document.querySelector("#hamburger").classList.remove("openbook");  document.querySelector(".openbook").classList.toggle("hide");
// }

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
  // hamburger.ad;
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
  })
);
