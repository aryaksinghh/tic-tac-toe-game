let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".reset-btn")
let msg = document.querySelector(".msg")
let newgame = document.querySelector(".new-btn")
let resetbtn = document.querySelector(".reset-btn")
messagehide = document.querySelector(".message-container")
let turn0 = true
let count = 0

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "0"
            turn0 = false
        }
        else {
            box.innerHTML = "X"
            turn0 = true
        }
        box.disabled = true
        count++;
        let winwin = checkwinner();
        if(count == 9 && !winwin){
            gameDraw()
        }
    })
})

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    messagehide.classList.remove("hide");
  };


const resetgame = ()=>{
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false;
    })
    turn0 = true
    count = 0
    messagehide.classList.add("hide")
}

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]


function winner(won) {
    let win = `Winner is ${won}`
    msg.innerHTML = win
    boxes.forEach(boxx=>{
        boxx.disabled = true
    })
    messagehide.classList.remove("hide")
}

function checkwinner() {
    for (const pattern of winpatterns) {
        let value1 = boxes[pattern[0]].innerHTML
        let value2 = boxes[pattern[1]].innerHTML
        let value3 = boxes[pattern[2]].innerHTML


        if (value1 != "" && value2 != "" && value3 != "") {
            if (value1 == value2 && value2 == value3) {
                winner(value1);
            }
        }
    }
}


newgame.addEventListener("click", resetgame)
resetbtn.addEventListener("click", resetgame)