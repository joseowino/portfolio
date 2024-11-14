const twitter=document.querySelector("#twitter");
twitter.addEventListener("click",()=>{
    alert("Twitter is DEACTIVATED for the moment being!!!")
});

const btn=document.querySelector("#submit-btn");
btn.addEventListener("click",()=>{
    alert("Haven't connected with express or back end stuff, it won't submit the form manually");
    alert("However if wants to connect, use rohitpandey73551@gmail.com");
});

const scrollUp=document.querySelector("#scroll-up");
scrollUp.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});

const burger=document.querySelector("#burger-menu");
const ul=document.querySelector("#navigation");
const nav=document.querySelector("nav");
const heading=document.querySelector("#heading");


burger.addEventListener("click",()=>{
    ul.classList.toggle("show");
});
const navLinks=document.querySelectorAll(".nav-link");
navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        ul.classList.remove("show");
    });
});
window.addEventListener("scroll",onScroll);
function onScroll(){
    ul.classList.remove("show");
    var scroll=document.documentElement.scrollTop;
    if(scroll>30){
        heading.classList.add("background-color");
        nav.classList.add("scrolled");
    }
    else{
        heading.classList.remove("background-color");
        nav.classList.remove("scrolled");
    }
};
