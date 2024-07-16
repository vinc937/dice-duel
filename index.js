const button = document.querySelector("#btn");
button.addEventListener("click", rollDice);

function changeText(content){
    document.querySelector("h1").textContent = content;
}

function rollDice(){
    var randomNumber1 = Math.floor((Math.random() * 6) + 1);
    var randomNumber2 = Math.floor((Math.random() * 6) + 1);

    document.querySelector("#spidey").setAttribute("src", "")

    if (randomNumber1 > randomNumber2){
        changeText("🚩Player 1 wins!");
    } else if (randomNumber1 < randomNumber2){
        changeText("Player 2 wins!🚩");
    } else{
        changeText("Draw!");
        document.querySelector("#spidey").setAttribute("src", "./images/spider-man.gif");
    }

    document.querySelector(".img1").setAttribute ("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute ("src", "./images/dice" + randomNumber2 + ".png");

}
