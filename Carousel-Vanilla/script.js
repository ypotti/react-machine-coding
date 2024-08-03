const dotContainerEl = document.getElementById("dotContainer");
const leftButtonEl = document.getElementById("leftButton");
const rightButtonEl = document.getElementById("rightButton");
const contentEl = document.getElementById("content");


const textArr = ["Primary", "Secondary", "Tertiary", "Quaternary", "Quinary"];
let currentIndex = 0;

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

function paint(index){
    let content = textArr[index];
    contentEl.innerHTML = content;

    // Unselect the previous dot
    let currentDotEl = dotContainerEl.getElementsByClassName("bg-grey");
    if(currentDotEl.length>0){
        currentDotEl[0].classList.remove("bg-grey");
    }

    // Select the current dot
    let dotEl = document.getElementById(`dot-${index}`);
    dotEl.classList.add("bg-grey");
}

function leftArrowClicked(){
    currentIndex--;
    if(currentIndex < 0) currentIndex = textArr.length-1;
    paint(currentIndex);
}

function rightArrowClicked(){
    currentIndex++;
    if(currentIndex >= textArr.length) currentIndex = 0;
    paint(currentIndex);
}

function dotClicked(e){
    let dotElementId = e.target.id;
    currentIndex = Number(dotElementId.charAt(dotElementId.length-1));
    paint(currentIndex);
}

// On Page Load
textArr.forEach((_,i)=>{
    let dotButton = document.createElement("button");
    dotButton.classList.add("dot");
    dotButton.id=`dot-${i}`;
    dotButton.addEventListener("click", dotClicked);

    dotContainerEl.appendChild(dotButton);
})
paint(currentIndex);