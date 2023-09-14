export default function ContactPage(){

    const contact=document.querySelector('#contact');
    const home=document.querySelector('#home');
    const menu=document.querySelector('#menu');

    contact.classList.remove("on");
    contact.classList.add("off");
    menu.classList.remove("off");
    menu.classList.add("on");
    home.classList.remove("off");
    home.classList.add("on");


    const content=document.querySelector('#content');
    const infoContact=document.createElement("div");

    const context=document.querySelector(".context");
    context.innerHTML="";

    infoContact.textContent="fakemail@fake.com";
    context.appendChild(infoContact);
}
