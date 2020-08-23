var a=Math.random();
a=a*6;
a=Math.floor(a)+1;
var image1="dice" + a + ".png";
var source1="images/"+ image1 ;
var archit=document.querySelector("img").setAttribute( "src" , source1);
var b=Math.random();
b=b*6;
b=Math.floor(b)+1;
var image2="dice" + b + ".png";
var source2="images/"+ image2 ;
var sparsh=document.querySelector(".img2").setAttribute( "src" , source2);
if(archit>sparsh)
{
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(sparsh>archit)
{
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else {

  document.querySelector("h1").innerHTML="Draw";
}
