function getHistory(){
	return document.getElementById("history-value").innerText;
}

function printHistory(num){
	document.getElementById("history-value").innerText=num;

}
function getOutput(){
	return document.getElementById("output-value").innerText
}

function printOutput(num){
	if (num == ""){
		document.getElementById("output-value").innerText=num;
	}
	else{
			document.getElementById("output-value").innerText= getFormattedNumber(num);

	}
}

// added a two local string function and give "en" as the parameter
function getFormattedNumber(num){
	if(num==""){
		return "";

	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}


// removes the commas
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
// looping through numbers and operators
var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
	operator[i].addEventListener('click', function(){
		if(this.id=="clear"){ 
			
			//if id is clear we set the history and output to empty characters
			printHistory("");
			printOutput("");
		}
		if(this.id== "backspace"){
			var output= reverseNumberFormat(getOutput()).toString(); //number is converted to a string
			if(output){ //if output has a value we take the output and remove one character from it
				output = output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output = getOutput();
			var history = getHistory();
			if(output==""&& history!= ""){
				if(isNaN(history[history.length-1])){
					history = history.substr(0, history.length-1);
				}
			}
			if (output!="" ||  history!="") {
				
				output = output== ""?
				output : reverseNumberFormat(output);
				history= history + output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");

				}
				else{
					history= history+this.id;
					printHistory(history);
					printOutput("");

				}
			}
		}
		
	});
}


var number = document.getElementsByClassName("number");
for(var i =0; i < number.length; i++){
	number[i].addEventListener('click', function(){
		var output = reverseNumberFormat(getOutput());
		if(output!=NaN){ //checking if output is a number
			output= output+this.id;  //calculating the id to the output and print
			printOutput(output);
		}
	});
}



