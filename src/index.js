const content=document.querySelector("#content");
const header=document.createElement("div");

const home=document.createElement("div");
const menu=document.createElement("div");
const contact=document.createElement("div");

home.setAttribute("id","home")
menu.setAttribute("id","menu")
contact.setAttribute("id","contact")
header.classList.add("header");
home.textContent="Home";
menu.textContent="Menu";
contact.textContent="Contact";

const headerImg = document.createElement("img");
headerImg.setAttribute('id', 'header');
headerImg.setAttribute('src', '../src/header2.jpg');

content.appendChild(headerImg);
header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);
content.appendChild(header);