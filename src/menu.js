export default function MenuPage() {
    const contact=document.querySelector('#contact');
    const home=document.querySelector('#home');
    const menu=document.querySelector('#menu');

    contact.classList.remove("off");
    contact.classList.add("on");
    menu.classList.remove("on");
    menu.classList.add("off");
    home.classList.remove("off");
    home.classList.add("on");

    const content = document.querySelector('#content');
    const context = document.querySelector(".context");
    context.innerHTML = "";

    const steakInfo=document.createElement("div");
    const steakGroup=document.createElement("div");

    const lobsterInfo=document.createElement("div");
    const lobsterGroup=document.createElement("div");

    const salmonInfo=document.createElement("div");
    const salmonGroup=document.createElement("div");

    steakGroup.classList.add("group");
    lobsterGroup.classList.add("group");
    salmonGroup.classList.add("group");

    const steakImg = document.createElement("img");
    steakImg.setAttribute('class', 'menu');
    steakImg.setAttribute('src', 'steak.jpeg');
    steakInfo.textContent="Steak : 15.00$";

    const lobster = document.createElement("img");
    lobster.setAttribute('class', 'menu')
    lobster.setAttribute('src', 'lobster.jpg');
    lobsterInfo.textContent="Lobster : 30.00$";

    const salmon = document.createElement("img");
    salmon.setAttribute('class', 'menu');
    salmon.setAttribute('src', 'salmon.jpg');
    salmonInfo.textContent="Salmon : 10.00$";

    steakGroup.appendChild(steakImg);
    steakGroup.appendChild(steakInfo);

    lobsterGroup.appendChild(lobster);
    lobsterGroup.appendChild(lobsterInfo);

    salmonGroup.appendChild(salmon);
    salmonGroup.appendChild(salmonInfo);

    context.appendChild(steakGroup);
    context.appendChild(lobsterGroup);
    context.appendChild(salmonGroup);
}