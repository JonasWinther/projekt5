const sections = document.querySelectorAll("section");
const box = document.querySelector(".box");
const color = ["#ACDF87", "#FDEE87", "#8BBDD9", "#FFAF7A", "#F26C73"];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const colorIndex = entry.target.getAttribute("data-index");
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry.isIntersecting) {
      box.style.setProperty("left", `${directions.left}px`);
      box.style.setProperty("top", `${directions.top}px`);
      box.style.setProperty("width", `${directions.width}px`);
      box.style.setProperty("height", `${directions.height}px`);
      box.style.background = color[colorIndex];
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
