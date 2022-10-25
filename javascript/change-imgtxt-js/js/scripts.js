let btn = document.getElementById("btn");
let title = document.getElementById("title");
let image = document.getElementById("image");
let currentTitle = title.textContent;

btn.addEventListener("click", function handleClick() {
  title.textContent = "Mozilla is cool";
  let name = prompt("Please enter your name", "Name");
  if (name != null) {
    title.textContent = title.textContent + ", " + name;
    currentTitle = title.textContent;
  }
});
image.addEventListener("mouseover", function imgHover() {
  title.textContent = "Is Brave even cooler?";
  image.src = "./images/bravelogo.png";
  document.body.style.backgroundColor = "white";
});

image.addEventListener("mouseout", function imgHover() {
  title.textContent = currentTitle;
  image.src = "./images/firefoxlogo.png";
  document.body.style.backgroundColor = "orange";
});
