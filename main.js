window.onload=function(){
let loadAnchor = location.hash;
    let anchor = loadAnchor.slice(1);
    let anchorDiv= anchor+"-div";
    if(anchorDiv=="-div"){
        console.log("all");
        let a=document.getElementById("all");
    let div = document.getElementById("all-div");
    div.classList.toggle("active");
    a.classList.toggle("active-link");
    }
    let activeDiv = document.getElementById(anchorDiv);
    activeDiv.classList.toggle("active");
    
    let a=document.getElementById(anchor);
    a.classList.toggle("active-link");
}

function myFunction(x) {
    let menu = document.getElementById("menu-to-open"); 
    let menuBg = document.getElementById("menu-bg");
    x.classList.toggle("change");
    menu.classList.toggle("appear");
    menuBg.classList.toggle("menu-visible");
    
}

function anchorRealizations(x) {
    let anchor=x.id;
    let divId= anchor+"-div";
    
    let divClass = document.getElementsByClassName("realization-grid");
let i;
for (i = 0; i < divClass.length; i++) {
  divClass[i].classList.remove("active");
} 
    
    let aClass = document.getElementsByClassName("realization-menu-link");
let l;
for (i = 0; i < aClass.length; i++) {
  aClass[i].classList.remove("active-link");
} 
    
    
    let a=document.getElementById(anchor);
    let div = document.getElementById(divId);
    div.classList.toggle("active");
    a.classList.toggle("active-link");
}


