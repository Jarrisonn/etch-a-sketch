//get and create dom elements
const container = document.querySelector(".container");
const fragment = document.createDocumentFragment();
const gridBtn = document.createElement("button");
const btncontainer = document.createElement("div");

//gets gridcol value from css used to create grid
let gridCol = getComputedStyle(container).getPropertyValue("--grid-col");


//btn styles
gridBtn.textContent = "Create new Grid";
gridBtn.style.width = "600px";
gridBtn.style.padding = "1rem";
gridBtn.style.marginTop = "10px";

//generates divs in a square using value from css
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

//lets user choose size of grid, by clearing container and generating using user input
gridBtn.addEventListener("click", () => {
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

//generates grid and appends to container element
generateGrid();
container.appendChild(fragment);
btncontainer.appendChild(gridBtn);
container.appendChild(btncontainer);
