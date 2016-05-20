var image1 = document.getElementById("box").style.backgroundImage="url('data:image/jpeg;base64,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')";
var image2 = document.getElementById("box").style.backgroundImage="url('data:image/jpeg;base64,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')";
var image3 = document.getElementById("box").style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTld3Q1mlhFxWzHX9_G0y-OlsgncYMehrKgPaQMSyoSX0ncdDKW')";
 
 function getRandomImage(){
	 var randInt = Math.random()*3;
	 if(randInt<1){
		 return image1;
	 }
	 else if(randInt <2 && randInt >1){
		 return image2;
	 }
	 else{
		 return image3;
	 }
 }

var clickedTime;
var createdTime;
var reactionTime;

function makeBox(){
	
	var time = Math.random();
		time=time*2000;
		setTimeout(function(){
	if(Math.random()>0.5){
	document.getElementById("box").style.borderRadius="100px";
	}
	else{
		document.getElementById("box").style.borderRadius="0px";
	}

	var top=Math.random();
	top=top*300;
	
	var left=Math.random();
	left=left*500;
	
	document.getElementById("box").style.top=top+"px";
	document.getElementById("box").style.left=left+"px";
	document.getElementById("box").style.backgroundImage=getRandomImage();
	document.getElementById("box").style.display="block";
	document.getElementById("box").style.border
	createdTime=Date.now();
}, time);
}

document.getElementById("box").onclick=function(){
	clickedTime=Date.now();
	reactionTime = (clickedTime - createdTime)/1000;
	document.getElementById("time").innerHTML=(reactionTime + "seconds");
	this.style.display="none";
	makeBox();
}
makeBox();