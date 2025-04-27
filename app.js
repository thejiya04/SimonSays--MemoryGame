let gameSeq=[];
let userSeq=[];
let started = false;
let level = 0;
let body = document.querySelector("body");
let para = document.querySelector("p");
// // let button = document.querySelector("box");
// // let level = 0;
let btns = ["purple" , "pink","blue" , "green" ];
document.addEventListener("keypress", function(){
    if (started== false){
        console.log("game is started");
        started= true;

    }
levelup();
});

 
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
    }

function levelup(){
    userSeq=[];
    level++;
    para.innerText = `LEVEL ${level}`;



    let randomidx = Math.floor(Math.random()*btns.length);
    let randomclr = btns[randomidx];
    let randombutton = document.querySelector(`.${randomclr}`);
    gameSeq.push(randomclr);
    console.log(gameSeq);
        flash(randombutton);
}
function checkAns(idx){
//    let idx = level -1;
   if (userSeq[idx] === gameSeq[idx]){
if(userSeq.length == gameSeq.length){
    setTimeout(levelup ,1000);
}

   }else{
    para.innerHTML =`Game over ! Your score was <b>${level}</b> <br>Press any key to restart.`;
    body.style.backgroundColor ="red";
    setTimeout(function(){
        body.style.backgroundColor ="white";
    },150);
    reset();
   }
}
function btnPress(){
    let btn = this;
    flash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset (){
   started == false;
   gameSeq =[];
   userSeq =[];
    level=0;
}
