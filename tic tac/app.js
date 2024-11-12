let clicks=document.querySelectorAll(".click");
let reset=document.querySelector("#resetbt");
let button=document.querySelector("#but");
let msg=document.querySelector("#message");
let msgcon=document.querySelector(".msg-container")
let message=document.querySelector("#message1")
let messgcon=document.querySelector(".messag")
let turn0=true;
const winpatt=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]
const disablebox=()=>{
    for(box of clicks){
    box.disabled=true;
    }
}
const enablebox=()=>{
    for(box of clicks){
    box.disabled=false;
    box.innerText="";
    }
}
const resetgame=()=>{
    turn0=true;
    count=0;
    enablebox();
    msgcon.classList.add("hide");
}

clicks.forEach((click)=>{
    click.addEventListener("click",()=>{
        console.log("box was clicked")
        if(turn0){
            click.innerText="O";
            turn0=false;
        }
        else{
            click.innerText="X";
            turn0=true;
        }
         click.disabled=true;
         winneer();
    });
});
const showwinner=(winner)=>{
    msg.innerText=`Congrulation winner is${winner}`;
    msgcon.classList.remove("hide");
    disablebox();
}
const winneer=()=>{
    for(let pattern of winpatt){
        let pos1=clicks[pattern[0]].innerText;
        let pos2=clicks[pattern[1]].innerText;
        let pos3=clicks[pattern[2]].innerText;

        if(pos1 !="" && pos2!= "" && pos3!= ""){
            if(pos1 === pos2 && pos2 === pos3)
            {
                
                showwinner(pos1);
                return;
            }
            
        }
        if(count===9 && pos1!=pos2 && pos2!=pos1)
            msgcon.classList.remove("hide");
    }

}
but.addEventListener("click",resetgame);
resetbt.addEventListener("click",resetgame);

