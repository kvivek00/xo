let boxes = document.querySelectorAll('.box');
let xy="y";
let winner=null;

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        if (box.textContent==="" && xy==="y"){
            box.textContent="X";
            xy="x";

        }
        else if (box.textContent=="" && xy==="x"){
            box.textContent="Y";
            xy="y";
        }
        setTimeout(() => {checkWinner();},1000);
    });
});
function checkWinner() {
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");
    let b4 = document.getElementById("b4");
    let b5 = document.getElementById("b5");
    let b6 = document.getElementById("b6");
    let b7 = document.getElementById("b7");
    let b8 = document.getElementById("b8");
    let b9 = document.getElementById("b9");

    let winPatterns = [
        [b1, b2, b3],
        [b4, b5, b6], 
        [b7, b8, b9], 
        [b1, b4, b7], 
        [b2, b5, b8], 
        [b3, b6, b9], 
        [b1, b5, b9], 
        [b3, b5, b7]  
    ];
    for (let pattern of winPatterns){
        let [first, middle, last]=pattern;
        if(first.textContent!==""&& first.textContent===middle.textContent && middle.textContent===last.textContent){
            winner=middle.textContent;
            localStorage.setItem('winner', winner)
            window.location.href="winner.html";
            return;
        }
    }
}
