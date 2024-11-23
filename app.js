let userscore = 0
let compscore = 0

let choices =document.querySelectorAll(".choice")
let msg =document.querySelector("#msg")
let getuserscore =document.querySelector("#user-score")
let getcompscore =document.querySelector("#comp-score")

const getcompchoice = () => {
    let options = ["rock","paper","scissors"]
    let random = Math.floor(Math.random() * 3)
    return options[random]
}

const drawgame = () => {
    console.log("game was draw")
    msg.innerText ="Game was draw. Play Again"
    msg.style.backgroundColor = "darkblue"
}

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++
        getuserscore.innerText=userscore
        getuserscore.style.color="green"
        msg.innerText = `You Win ${userchoice} beats ${compchoice}` 
        msg.style.backgroundColor = "green"
       
    }

    else{
        compscore++
        getcompscore.innerText=compscore
        getcompscore.style.color="red"
        msg.innerText = `You Lose ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "red"
        
    }
}
const playgame =(userchoice) => {
    console.log("User choice = ",userchoice)
    //generate computer choice
    let compchoice = getcompchoice()
    console.log("comp choice = ",compchoice)

    if(userchoice === compchoice){
        drawgame()
    }

    else{
        let userwin = true
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true
        }

        else if(userchoice === "paper"){
            userwin = compchoice === "scissors" ? false : true
        }

        else{
            userwin =  compchoice === "rock" ? false : true
        }

        showwinner(userwin,userchoice,compchoice)
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        console.log("Choice was clicked",userchoice)
        playgame(userchoice)
    })
})
