"use strict";

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(
  (accordion) =>
    (accordion.onclick = () => {
      if (accordion.classList.contains("active")) {
        accordion.classList.toggle("active");
      } else {
        accordions.forEach((e) => {
          e.classList.remove("active");
        });
        accordion.classList.add("active");
      }
    })
);
