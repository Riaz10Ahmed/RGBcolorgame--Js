var num = 6;
var colors = colorlist(num);
var squares = document.querySelectorAll(".square");
var guess = guessColor();
var display= document.getElementById("display");
display.textContent=guess;
var h1=document.querySelector("h1");
var p=document.querySelector("#message");
var reset = document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	num = 3;
	colors = colorlist(num);
	guess = guessColor();
	display.textContent=guess;
	message.textContent="START";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none"; 
		}
	}
});

hard.addEventListener("click",function(){ 
	easy.classList.remove("selected");
	hard.classList.add("selected");
	num=6;
	colors = colorlist(num);
	guess = guessColor();
	display.textContent=guess;
	message.textContent="START";
	for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block"; 
		}
});

reset.addEventListener("click",function(){
	colors = colorlist(num);
	guess = guessColor();
	display.textContent=guess;
	message.textContent="START";
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor="steelblue";
});

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
	var clickedColor = this.style.backgroundColor;
	console.log(clickedColor,guess); 
	if(clickedColor === guess){
		p.textContent = "correct";
		reset.textContent = "Play Again";
		changeColor();
	}else{
		this.style.backgroundColor = "black";
		p.textContent = "Try Again";
	}
});
}

function changeColor(){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = guess;
		h1.style.backgroundColor = guess;
	}
}

function guessColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
} 

function colorlist(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

	var rgb = "rgb(" +r+ ", " +g+ ", " +b+ ")";
	return rgb;
}