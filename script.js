
function makeBubble(){
  var clu="";
for(var i=1;i<=120;i++){
   var num = Math.floor(Math.random()*10)
  clu +=  `<div class="bubble">${num}</div>`;
}
document.querySelector(".gbut").innerHTML=clu;
}
var nhit;
function newHit(){
  nhit = Math.floor(Math.random()*10)
  document.querySelector("#hit").textContent= nhit; 
}
var ntime =30;
function timer(){
  var timeint = setInterval(function(){
     if(ntime>0){
      ntime--;
     document.querySelector("#tim").textContent=ntime;
     }
     else{
      clearInterval(timeint);
      document.querySelector(".gbut").innerHTML=`<h1>GAME OVER</h1> \n <h1>YOUR SCORE ${scores-10}</h1>`;
     }
  },1000)
}
var scores = 0;
function result(){
  document.querySelector("#scorere").textContent = scores;
  scores += 10; 
}
document.querySelector(".gbut").addEventListener("click",function(dets){
    var relu = (Number( dets.target.textContent));  
     if(relu==nhit){
     result();
     makeBubble();
     newHit();  
     }
})
result();
makeBubble();
newHit();
timer();
