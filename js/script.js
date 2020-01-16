let prevBtn=document.querySelector(".PrevBtn");
let nextBtn=document.querySelector(".NextBtn");
let container=document.querySelector(".images");

let counter=1;

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

function nextSlide(){
    container.animate([{opacity:'0.5'},{opacity:'1.0'}],{duration:250, fill:'forwards'})
    if (counter===7){
        counter=0;
    }
    counter++;
    container.style.backgroundImage = `url(../img/bg-${counter}.jpg)`;
}
function prevSlide(){
    container.animate([{opacity:'0.5'},{opacity:'1.0'}],{duration:250, fill:'forwards'})

    
    counter--;
    container.style.backgroundImage = `url(../img/bg-${counter}.jpg)`;
    
    if(counter===1){
        counter=8;
    }
}