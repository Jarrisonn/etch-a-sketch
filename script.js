const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();
const gridBtn = document.createElement("button");
const btncontainer = document.createElement("div");

let gridCol = getComputedStyle(container).getPropertyValue("--grid-col");
console.table(gridCol);

gridBtn.textContent = "Create new Grid";
gridBtn.style.width = "600px";
gridBtn.style.padding = "1rem";
gridBtn.style.marginTop = "10px";

let colHeight = 600 / gridCol;
console.log(colHeight);

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

let userCols = gridBtn.addEventListener("click", () => {
  chooseCols = () => {
    let colAmount = prompt("Please enter grid size from 1 - 100");
    if (colAmount > 100) {
      chooseCols();
    } else {
      container.style.setProperty("--grid-col", colAmount);
      gridCol = colAmount;
      container.innerHTML = "";
      generateGrid();
      container.appendChild(fragment);
      btncontainer.appendChild(gridBtn);
      container.appendChild(btncontainer);
    }
  };
  chooseCols();
});

generateGrid();

container.appendChild(fragment);
btncontainer.appendChild(gridBtn);
container.appendChild(btncontainer);
