const listItems = document.querySelectorAll(".list-item");
const button = document.getElementById("butn");
const button2 = document.getElementById("butn2");
let count = 1;

function fontSizeChange(size) {
  listItems.forEach((item) => {
    item.style.fontSize = size;
    document.getElementById("fonttikoko").innerHTML =
      "Fonttikoko on nyt " + size;
  });
  count++;
}

function fontStyleChange(tyyli) {
  listItems.forEach((item) => {
    item.style.fontFamily = tyyli;
    document.getElementById("fonttistyle").innerHTML = "Fontti on nyt " + tyyli;
  });
  count++;
}

button.addEventListener("click", () => {
  switch (count) {
    case 1:
      fontSizeChange("12px");
      break;

    case 2:
      fontSizeChange("14px");
      break;

    case 3:
      fontSizeChange("16px");
      break;

    case 4:
      fontSizeChange("18px");
      break;

    case 5:
      fontSizeChange("10px");
      count = 1;
      break;
  }
});
button2.addEventListener("click", () => {
  switch (count) {
    case 1:
      fontStyleChange("Roboto");
      break;

    case 2:
      fontStyleChange("Manslava");
      break;

    case 3:
      fontStyleChange("Grenze");
      break;

    case 4:
      fontStyleChange("Turret road");
      break;

    case 5:
      fontStyleChange("Courier New");
      count = 1;
      break;
  }
});
