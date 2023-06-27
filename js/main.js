// Variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
  puzzleBoard = document.querySelector(".puzzle-board"),
  puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
  puzzlePieceDiv = document.querySelector(".puzzle-pieces"),
  dropZones = document.querySelectorAll(".drop-zone"),
  resetButton = document.querySelector("#resetBut");

// Function to change the background image
function changeBGImage() {
  puzzlePieces.forEach((piece) => {
    if (piece.parentNode.classList.contains("drop-zone")) {
      puzzlePieceDiv.appendChild(piece);
    }
  });

  puzzleBoard.style.backgroundImage = `url(img/backGround${this.dataset.bgref}.jpg)`;
}

// Function for handling the drag start event
function handleStartDrag(e) {
  e.dataTransfer.setData("draggedEl", this.id);
}

// Function for handling the drag over event
function handleDragOver(e) {
  e.preventDefault();
  console.log("Dragged over me");
}

// Function for handling the drop event
function handleDrop(e) {
  e.preventDefault();
  console.log("Dropped something on me");

  if (this.children.length >= 1) {
    return;
  }

  let droppedId = e.dataTransfer.getData("draggedEl");
  console.log(droppedId);
  this.appendChild(document.querySelector(`#${droppedId}`));
}

// Event Listeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach((piece) => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach((zone) => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));

resetButton.addEventListener("click", () => document.location.reload());
