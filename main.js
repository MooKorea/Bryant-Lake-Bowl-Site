import "./style.scss";
import anime from "animejs";

const hitboxes = document.querySelectorAll(".food-selection .hitboxes div");
const hitboxContainer = document.querySelector(".food-selection .hitboxes");
const images = document.querySelectorAll(".food-selection .right .top div");
const labels = document.querySelectorAll(".food-selection .right .buttons div");
const labelBorder = document.querySelector(".food-selection .right .border-glow");

function handleMouseOver(index) {
  images.forEach((e, i) => {
    e.style.opacity = "1";
    if (i !== index) e.style.opacity = "0.5";
  });

  labels.forEach((e, i) => {
    e.classList.add("active")
    if (i !== index) e.classList.remove("active")
  });

  let maskParam;
  switch (index) {
    case 0:
      maskParam = "black 0%, black 10%, transparent 40%";
      break;
    case 1:
      maskParam = "transparent 0%, black 40%, transparent 70%";
      break;
    case 2:
      maskParam = "transparent 30%, black 60%, transparent 100%";
      break;
    case 3:
      maskParam = "transparent 60%, black 85%, black 100%";
      break;
  }
  labelBorder.style.opacity = "1"

  anime({
    targets: labelBorder,
    webkitMaskImage: `linear-gradient(to right, ${maskParam})`,
    duration: 200,
    easing: "easeInOutQuad"
  })
}

hitboxes.forEach((e, i) => {
  e.addEventListener("mouseover", () => handleMouseOver(i));
});

function handleMouseLeave() {
  images.forEach((e) => {
    e.style.opacity = "1";
  });
  labelBorder.style.opacity = "0"

  labels.forEach((e, i) => {
    e.classList.remove("active")
  });
}

hitboxContainer.addEventListener("mouseleave", handleMouseLeave);
