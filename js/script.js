let iframe = document.getElementById("project");
console.log(iframe);
let links = document.querySelectorAll("nav li a");
console.log(links);
let dropdownContents = document.querySelectorAll(".dropdownContent");

function myFunction1() {
  let button = document.getElementById("dropdown1");
  dropdownContents.forEach((element) => {
    if (element != button) element.classList.remove("show");
  });

  button.classList.toggle("show");
}
function myFunction2() {
  let button = document.getElementById("dropdown2");
  dropdownContents.forEach((element) => {
    if (element != button) element.classList.remove("show");
  });

  button.classList.toggle("show");
}

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdownContent");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       openDropdown.classList.remove("show");
//     }
//   }
// };

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let linkSrc = event.path[0].href;
    iframe.src = linkSrc;
    console.log(linkSrc);
  });
});
