const main = document.createElement("main");

// Luodaan kaikki eri elementit headeriin
const header = document.createElement("header");
header.classList.add("ylatunniste");

const h1 = document.createElement("h1");
const p1 = document.createElement("p");

const node1 = document.createTextNode("Tämä on artikkelin otsikko");
const node2 = document.createTextNode(
  "Ensimmäinen kappale! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio asperiores distinctio, id blanditiis aspernatur quia quo nesciunt magnam quisquam illo, molestias eveniet quasi vel voluptates ut sit error tempore laboriosam."
);

//Lisätään elementit headerin sisään

header.appendChild(h1);
header.appendChild(p1);
h1.appendChild(node1);
p1.appendChild(node2);

// Luodaan sectioniin kuuluvat elementit

const section1 = document.createElement("section");
section1.id = "rinnakkain";
const p2 = document.createElement("p");

const node3 = document.createTextNode(
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio asperiores distinctio, id blanditiis aspernatur quia quo nesciunt magnam quisquam illo, molestias eveniet quasi vel voluptates ut sit error tempore laboriosam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio asperiores distinctio, id blanditiis aspernatur quia quo nesciunt magnam quisquam illo, molestias eveniet quasi vel voluptates ut sit error tempore laboriosam."
);

const figure1 = document.createElement("figure");
figure1.id = "kuvanpaikka";
const img = document.createElement("img");
img.src = "./images/jsmachine.gif";

// Lisätään elementit sectionin sisään
section1.appendChild(p2);
section1.appendChild(figure1);
p2.appendChild(node3);
figure1.appendChild(img);

//Luodaan footer elementit

const footer = document.createElement("footer");
const p3 = document.createElement("p");
const date = new Date();
const node4 = document.createTextNode("@ Anton Kiiski " + date.toDateString());
const p4 = document.createElement("p");
// const node5 = document.createTextNode(date.toLocaleTimeString());
//node5.id = "time";
const section2 = document.createElement("section");
section2.id = "clock";

// Lisätään footeriin kello

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

// Lisätään elementti footerin sisään
footer.appendChild(p3);
p3.appendChild(node4);
footer.appendChild(p4);
//p4.appendChild(node5);
footer.appendChild(section2);

// Lisätään kaikki elemntit main tagiin

main.appendChild(header);
main.appendChild(section1);
main.appendChild(footer);

// Määritetään body ja lisätään main siihen
const body = document.querySelector("body");
body.appendChild(main);
