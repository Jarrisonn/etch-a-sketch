const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();

let gridCol = getComputedStyle(container).getPropertyValue("--grid-col");
console.table(gridCol);




let colHeight = 600 / gridCol;
console.log(colHeight);

gridCol = 10;

generateGrid = () => {
  for (let col = 0; col < gridCol; col++) {
    for (let row = 0; row < gridCol; row++) {
      const div = document.createElement("div");
      
      div.classList.add("white");
      div.addEventListener("mouseenter", () => {
        div.classList.remove("white");
        div.classList.add("black");
      });
      fragment.appendChild(div);
    }
  }
};

container.style.gridTemplateColumns = `repeat(${gridCol}), ${colHeight}`;
generateGrid();

container.appendChild(fragment);
