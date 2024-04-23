
window.addEventListener("DOMContentLoaded", function() {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });
function sound(){
    var sound= new Audio("music/snow-bros.mp3");
    sound.play();
}
function play()
{
    // **************************Miss Method*******************************

    var randomNumber1= Math.floor(Math.random()*6+1);

    //dynamically path is storing in path variable

    var path="images/dice"+ randomNumber1+".png";

    //update src to dynamic path
    
    document.querySelector(".img1").setAttribute("src",path);

    var randomNumber2= Math.floor(Math.random()*6+1);

    var path="images/dice"+ randomNumber2+".png";

    document.querySelector(".img2").setAttribute("src",path);

if(randomNumber1 > randomNumber2)
{

document.querySelector("h1").innerHTML="Player 1 WON!!! 😍"

}else if(randomNumber1 == randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw!!! 😐"

}else{

    document.querySelector("h1").innerHTML="Player 2 WON!!! 😍"
}
}

// *******************************************Our Method********************

// if(randomNumber1 == 1)
// {
// var img1=document.querySelector(".img1");
// img1.setAttribute("src","images/dice1.png");

// }else if(randomNumber1 == 2 )
// {
//     var img1=document.querySelector(".img1");
//     img1.setAttribute("src","images/dice2.png");
// }else if(randomNumber1 == 3)
// {
//     var img1=document.querySelector(".img1");
//     img1.setAttribute("src","images/dice3.png");
// }else if(randomNumber1 == 4)
// {
//     var img1=document.querySelector(".img1");
//     img1.setAttribute("src","images/dice4.png");
// }else if(randomNumber1 == 5)
// {
//     var img1=document.querySelector(".img1");
// img1.setAttribute("src","images/dice5.png");

// }else
// {
//     var img1=document.querySelector(".img1");
//     img1.setAttribute("src","images/dice6.png");
// }

// if(randomNumber2 == 1)
// {
// var img2=document.querySelector(".img2");
// img2.setAttribute("src","images/dice1.png");

// }else if(randomNumber2 == 2 )
// {
//     var img2=document.querySelector(".img2");
//     img2.setAttribute("src","images/dice2.png");
// }else if(randomNumber2 == 3)
// {
//     var img2=document.querySelector(".img2");
//     img2.setAttribute("src","images/dice3.png");
// }else if(randomNumber2 == 4)
// {
//     var img2=document.querySelector(".img2");
//     img2.setAttribute("src","images/dice4.png");
// }else if(randomNumber2 == 5)
// {
//     var img2=document.querySelector(".img2");
// img2.setAttribute("src","images/dice5.png");

// }else
// {
//     var img2=document.querySelector(".img2");
//     img2.setAttribute("src","images/dice6.png");
// }

