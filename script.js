let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
const baari = document.querySelector("#baari")

let currentTurn  = "X"


function currentbaari(){
    if(baari.innerHTML==="X"){
        return baari.innerHTML="0"
    }
    else if(currentTurn==="0"){
        return baari.innerHTML="X"
    } 
    // else{
    //     return baari.innerHTML=won + " X"
    // }
}

function changeTurn(){
    if(currentTurn==="X"){
        return currentTurn="0"
    }
    else{
        return currentTurn="X"
    }
    
}
let won
function checkWin(){
    let boxtext = document.getElementsByClassName('box')
    //console.log(boxtext[e[0]]);
    let wins = [
        [0,1,2,77,71,0],
        [3,4,5,77,228,0],
        [6,7,8,77,384,0],
        [0,3,6,-76,225,90],
        [1,4,7,77,228,90],
        [2,5,8,231,228,90],
        [0,4,8,80,229,45],
        [2,4,6,69,236,-45]
    ]
    wins.forEach((item) => {
        if(boxtext[item[0]].innerHTML==boxtext[item[1]].innerHTML && boxtext[item[2]].innerHTML==boxtext[item[1]].innerHTML && boxtext[item[0]].innerHTML!==""){
            won = boxtext[item[0]].innerHTML 
            console.log( won + " won");
            Turn.innerHTML=""
            baari.innerHTML=won + " Won"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            document.querySelector('.line').style.width="20vw"
            document.querySelector('.line').style.transform=`translate(${item[3]}px, ${item[4]}px) rotate(${item[5]}deg)`
            
            
            
        }
    })
}

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((item) => {
    //console.log(item.innerHTML)
    item.addEventListener('click',function(){
        if(item.innerHTML===""){
            item.innerHTML=currentTurn
            currentbaari()
            changeTurn()
            turn.play()
            checkWin()
        }
        
    })
})

reset.addEventListener('click',()=>{
    boxtext = document.getElementsByClassName('box')
    Array.from(boxtext).forEach((item)=>{
        item.innerHTML=""
        Turn.innerHTML="Turn for"
        currentTurn="0"
        
        
        
        currentbaari()
        baari.innerHTML=changeTurn()        
        
        
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
        document.querySelector('.line').style.width="0vw"
    })
})

