	var createdTime;
	var clickedTime;
	var reactionTime;
	var time;
	var count;
	var average;
	var total;
	var show;
		
	var xPos;
	var yPos;
	var shape; //less than or equal to 5 is square, greater than 5 is circle.
		
	
	function getRandomColor() {
			var letters = '0123456789ABCDEF'.split('');
			var color = '#';
			for(var i=0; i<6; i++) {
				color += letters[Math.round(Math.random() * 15)];
			}
			return color;
	}
		
	function makeBox() {
						
		time=Math.random();
		xPos=Math.random();
		yPos=Math.random();
		shape=Math.random();
		
		time *=2000;
		xPos = xPos*(window.innerWidth-200) + "px";
		yPos = yPos*(window.innerHeight-380) + "px";
		shape = shape*10;
		
				
		if(show) {
			setTimeout(function() {
				if(show){
					if(shape <= 5) {
						document.getElementById("box").style.borderRadius="0px";
						//document.getElementById("shape").innerHTML="square";
					} else {
						document.getElementById("box").style.borderRadius="100px";
						//document.getElementById("shape").innerHTML="circle";
					}
					
					//document.getElementById("sValue").innerHTML=shape;
					document.getElementById("box").style.backgroundColor=getRandomColor();
					document.getElementById("box").style.display="block";
					document.getElementById("box").style.top=yPos;
					document.getElementById("box").style.left=xPos;
					
					createdTime=Date.now();
									
				}
			}, time);
		} 
	}
	
	
	
	document.getElementById("startstop").onclick = function() {
		if(this.innerHTML=="START") {
			this.innerHTML="STOP";
			count=0;
			total=0;
			show=true;
			document.getElementById("clickTime").style.display="block";
			document.getElementById("averageTime").style.display="none";
			document.getElementById("time").innerHTML=0;
			makeBox();
			
		} else {
			this.innerHTML="START";
			show=false;
			document.getElementById("clickTime").style.display="none";
			document.getElementById("averageTime").style.display="block";
			document.getElementById("average").innerHTML = (total/count).toFixed(3);
			document.getElementById("box").style.display="none";
		}
	}
	
		
	document.getElementById("box").onclick = function() {
		
		clickedTime=Date.now();
		count++;
		reactionTime=(clickedTime-createdTime)/1000;
		total += reactionTime;
				
		document.getElementById("time").innerHTML=reactionTime;
		
		this.style.display = "none";
		
		makeBox();
	}
		
	