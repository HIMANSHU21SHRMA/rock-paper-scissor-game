const userInps = document.querySelectorAll('.choise') 
const computer = document.querySelectorAll('.computer')
let msg = document.querySelector("#msg");
let userScore = 0;
let computerScore = 0;
let youCount = document.querySelector("#usercount");
let computerCount = document.querySelector("#computercount");


const computerAnimation = () => {
    computer.forEach((comp) => {
        comp.classList.add('animation')
        setTimeout(() => {
            comp.classList.remove("animation")
                      
        },3000)

    })
}

const gencompuChoise = () => {
    const option = ["rock", "paper", "scissor"];
    let reandomNum = Math.floor(Math.random() * 3);
    let computerIs = option[reandomNum]
    setTimeout( () => {
        computer.forEach((com) => {
            if (com.classList.contains(computerIs)) {
                com.style.filter = "grayscale(1)";
                setTimeout(() => {
                com.style.filter = "";

                },4000)
            } else {
                com.style.filter = "";
            }
        })
    },3000)
  
    return computerIs

}

let winnerShow = (userWin, userid, compuchoise) => {
    if (userWin) {

        setTimeout(() => {
            msg.innerText = `You win! ${userid} beats ${compuchoise}`
            userScore++
        youCount.innerHTML = userScore;
            
            msg.style.backgroundColor = "green"


        },3000)
        
        // console.log(`You win! ${userid} beats ${compuchoise}`);
    }else{
        // console.log("you lose");


        setTimeout(() => {
            msg.innerText = `You lose! ${compuchoise} beats ${userid}`
            computerScore++
            computerCount.innerHTML = computerScore;

            msg.style.backgroundColor = "red"
        },3000)

        

    }
}
const play = (userid) => {
    // console.log("user choidse", userid);
    let compuchoise = gencompuChoise()
    // console.log("computer choise ",compuchoise);
    if (userid === compuchoise) {
        // console.log("Game was Drew, Play again.");
        setTimeout(() => {
            msg.innerText = "Game was Drew, Play again."
            msg.style.backgroundColor = "black"


        },3000)

   

    }
    else{
        let userWin = true ;
          if (userid === "rock") {
            userWin = compuchoise === "paper"?false : true;
              }
         else if(userid === "paper"){
            userWin = compuchoise === "scissor" ? false : true;

              }
         else if(userid === "scissor"){
            userWin = compuchoise === "rock" ? false : true;

              }
              winnerShow(userWin, userid, compuchoise)
    }
}
userInps.forEach((choise) => {
    choise.addEventListener('click' , () => {

        choise.style.filter = "grayscale(1)";
        setTimeout(() => {
        choise.style.filter = "";

        },4000)
        let userid = choise.getAttribute("id")

        computerAnimation()
        play(userid)
        
        // console.log("choise print", choiseid);

    })
})