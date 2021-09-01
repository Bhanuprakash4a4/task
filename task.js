function clickme(){
    var div =$("<div class='progress-bar'></div><br>");
    $("body").append(div);
    $('.progress-bar').animate(
      {width: '100%'}, 
      {duration: 5000}        
    );
  }
//Current value set back to 0.
function resetButton() {
	var r = getProgress();
	setProgress(r = 0);
}
//Stop Auto complete value at current value when button is pressed.
function stopProgress(){
	/* Update: Stop id interval */
  clearInterval(id)
  id = ''
}

//Get Current Value of attributes
function getProgress() {
	return document.getElementById("progressbar").getAttribute("aria-valuenow");
	return document.getElementById("progressbar").getAttribute("style","width:");
	return document.getElementById("progressbar").innerHTML;
	}

//Set value of attributes
function setProgress(value) {
	document.getElementById("progressbar").setAttribute("aria-valuenow",value);
	document.getElementById("progressbar").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbar").innerHTML = (value+ "%"); 
}

//Auto complete value to max in this case max is 100 with Interval of 100.
function autoProgress() {
	var elem = document.getElementById("progressbar");
	var width = 0;
	var id = setInterval(frame, 100);
	function frame(){
		if(width == 100){
			clearInterval(id);
		}else{
			width++;
			elem.style.width = width + '%';
			elem.innerHTML = width * 1 + '%';
		}
	}
}
