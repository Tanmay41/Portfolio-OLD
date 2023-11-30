var Rnum1 = Math.random() * 6 + 1;
Rnum1 = Math.floor(Rnum1);

var Rnum2 = Math.random() * 6 + 1;
Rnum2 = Math.floor(Rnum2);

if(Rnum1 === 1){
    document.querySelector(".img1").setAttribute("src", "./images-dice/dice1.png");
}
else if(Rnum1 === 2){
    document.querySelector(".img1").setAttribute("src", "./images-dice/dice2.png");
}
else if(Rnum1 === 3){
    document.querySelector(".img1").setAttribute("src", "./images-dice/dice3.png");
}
else if(Rnum1 === 4){
    document.querySelector(".img1").setAttribute("src", "./images-dice/dice4.png");
}
else if(Rnum1 === 5) {
    document.querySelector(".img1").setAttribute("src", "./images-dice/dice5.png");
}
else {
    document.querySelector(".img1").setAttribute("src", "./images-dice/dice6.png");
}



if(Rnum2 === 1){
    document.querySelector(".img2").setAttribute("src", "./images-dice/dice1.png");
}
else if(Rnum2 === 2){
    document.querySelector(".img2").setAttribute("src", "./images-dice/dice2.png");
}
else if(Rnum2 === 3){
    document.querySelector(".img2").setAttribute("src", "./images-dice/dice3.png");
}
else if(Rnum2 === 4){
    document.querySelector(".img2").setAttribute("src", "./images-dice/dice4.png");
}
else if(Rnum2 === 5) {
    document.querySelector(".img2").setAttribute("src", "./images-dice/dice5.png");
}
else {
    document.querySelector(".img2").setAttribute("src", "./images-dice/dice6.png");
}


if(Rnum1 === Rnum2) {
    document.querySelector("h1").innerHTML="Tie!";
}
else if(Rnum1 > Rnum2) {
    document.querySelector("h1").innerHTML="Player 1 Won!";
}
else if(Rnum1 < Rnum2) {
    document.querySelector("h1").innerHTML="Player 2 Won!";
}
else {
    document.querySelector("h1").innerHTML="There is an technical error on you end.";
}