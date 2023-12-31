export default function HomePage(){
    const contact=document.querySelector('#contact');
    const home=document.querySelector('#home');
    const menu=document.querySelector('#menu');

    contact.classList.remove("off");
    contact.classList.add("on");
    menu.classList.remove("off");
    menu.classList.add("on");
    home.classList.remove("on");
    home.classList.add("off");


    const content=document.querySelector('#content');
    const context=document.querySelector(".context");
    context.innerHTML="";

    context.textContent="Indulge your taste buds at our exquisite restaurant! Discover a culinary journey like no other, where every dish is a masterpiece crafted from the freshest ingredients. From sizzling steaks to mouthwatering seafood, our menu boasts a symphony of flavors to satisfy every palate. Enjoy an elegant dining experience in our charming ambiance, accompanied by impeccable service that will make your evening truly unforgettable. Whether you're celebrating a special occasion or simply seeking a delightful meal, join us. Book your table today and savor the art of dining."

    content.appendChild(context);
}