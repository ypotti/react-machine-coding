const dotContainerEl = document.getElementById("dotContainer");
const leftButtonEl = document.getElementById("leftButton");
const rightButtonEl = document.getElementById("rightButton");
const imagesContainer = document.querySelector(".content-container");
const images = document.querySelectorAll(".content-container img");
const autoplayBox = document.querySelector("#autoplay");

let currentIndex = 0;
let autoplayId = null;

// AutoPlay
autoplayBox.addEventListener("change",()=>{
    if(autoplayId){
        clearInterval(autoplayId);
        autoplayId = null;
    }else{
        autoplayId = setInterval(rightArrowClicked, 1000);
    }
});

// Stop autoPlay on hovering over image
imagesContainer.addEventListener("mouseover",()=>{
    if(autoplayId){
        clearInterval(autoplayId);
    }
})

// Start autoplay if hovering event exists
imagesContainer.addEventListener("mouseout", ()=>{
    if(autoplayId){
        autoplayId = setInterval(rightArrowClicked, 1000);
    }
})

leftButtonEl.addEventListener("click", leftArrowClicked);
rightButtonEl.addEventListener("click", rightArrowClicked);

//Keyboard Accessibility
document.addEventListener("keydown", (e)=>{
    if(e.key==="ArrowRight"){
        rightButtonEl.focus();
        rightArrowClicked();
    }

    if(e.key==="ArrowLeft"){
        leftButtonEl.focus();
        leftArrowClicked();
    }
})

function paint(){

    imagesContainer.style.transform = `translateX(${(currentIndex)*300*-1}px)`;

    // Unselect the previous dot
    let currentDotEl = dotContainerEl.getElementsByClassName("bg-grey");
    if(currentDotEl.length>0){
        currentDotEl[0].classList.remove("bg-grey");
    }

    // Select the current dot
    let dotEl = document.getElementById(`dot-${currentIndex}`);
    dotEl.classList.add("bg-grey");
}

function leftArrowClicked(){
    currentIndex--;
    if(currentIndex < 0) currentIndex = images.length-1;
    paint();
}

function rightArrowClicked(){
    currentIndex++;
    if(currentIndex >= images.length) currentIndex = 0;
    paint();
}

function dotClicked(index){
    currentIndex = index;
    paint();
}

// On Page Load
images.forEach((_,i)=>{
    let dotButton = document.createElement("button");
    dotButton.classList.add("dot");
    dotButton.id=`dot-${i}`;
    dotButton.addEventListener("click", ()=>{
        dotClicked(i);
    });

    dotContainerEl.appendChild(dotButton);
})
paint(currentIndex);