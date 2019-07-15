import "./main.scss";
import AOS from "aos";

window.addEventListener("load", function() {
  document.querySelector("body").classList.add("loaded");
});

AOS.init();