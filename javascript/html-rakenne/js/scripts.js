// Luodaan section tagi ja sijoitetaan se bodyn sisälle
const section = document.createElement("section1");
document.body.appendChild(section);

// Lisätään section elementin sisälle 2 kappaletta
// Ensimmäinen kappale
const para = document.createElement("p");
section.appendChild(para);
para.setAttribute("id", "p1");
const node = document.createTextNode("Ensimmäinen teksti");
p1.appendChild(node);

// Toinen kappale

const para2 = document.createElement("p");
section.appendChild(para2);
para2.setAttribute("id", "p2");
const node2 = document.createTextNode("Toinen teksti");
p2.appendChild(node2);

// Lisätään vielä kolmas kappale

const para3 = document.createElement("p");
section.appendChild(para3);
para3.setAttribute("id", "p3");
const node3 = document.createTextNode("Kolmas teksti");
p3.appendChild(node3);
