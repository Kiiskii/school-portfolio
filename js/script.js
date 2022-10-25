let iframe = document.getElementById("project");
console.log(iframe);
let links = document.querySelectorAll("article li a");
console.log(links);

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let linkSrc = event.path[0].href;
    iframe.src = linkSrc;
    console.log(linkSrc);
  });
});
