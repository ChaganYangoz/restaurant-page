import ContactPage from "./contact";
import HomePage from "./home";
import MenuPage from "./menu";

const content=document.querySelector("#content");
const header=document.createElement("div");

const home=document.createElement("div");
const menu=document.createElement("div");
const contact=document.createElement("div");

const context=document.createElement("div");
context.classList.add("context");

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

contact.classList.add("on");
menu.classList.add("on");
home.classList.add("off");

contact.onclick=ContactPage;
home.onclick=HomePage;
menu.onclick=MenuPage;

content.appendChild(headerImg);
header.appendChild(home);
header.appendChild(menu);
header.appendChild(contact);
content.appendChild(header);
content.appendChild(context);

HomePage();
