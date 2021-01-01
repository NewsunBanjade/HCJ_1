const icon = document.querySelectorAll(".section-1-icons i");
let i = 1;
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

setInterval(() => {
  i++;

  const icons = document.querySelector(".section-1-icons .change");
  icons.classList.remove("change");
  if (i > icon.length) {
    icon[0].classList.add("change");
    i = 1;
  } else {
    icons.nextElementSibling.classList.add("change");
  }
}, 4000);
