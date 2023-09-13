export default function ContactPage(){
    const content=document.querySelector('#content');
    const infoContact=document.createElement("div");

    const context=document.querySelector(".context");
    context.innerHTML="";

    infoContact.textContent="fakemail@fake.com";
    context.appendChild(infoContact);
}
