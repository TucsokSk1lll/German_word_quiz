var clickedin_plural = false

	
	document.getElementById('Plural_input').style.display = 'none';

	document.addEventListener("DOMContentLoaded", function() {
		
	
		document.getElementById("-").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Plural_input").value = "-"
			//console.log("-");
		});
		document.getElementById("Umlaut").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Plural_input").value = "Umlaut"
			//console.log("Umlaut");
		});
		document.getElementById("-e").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Plural_input").value = "-e"
			//console.log("-e");
		});
		document.getElementById("Umlaut -e").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Plural_input").value = "Umlaut -e"
			//console.log("Umlaut -e");
		});
		document.getElementById("-er").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Plural_input").value = "-er"
			//console.log("-er");
		});
		document.getElementById("Umlaut -er").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Plural_input").value = "Umlaut -er"
			//console.log("Umlaut -er");
		});
		document.getElementById("-n").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Plural_input").value = "-n"
			//console.log("-n");
		});
		document.getElementById("-en").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Plural_input").value = "-en"
			//console.log("-en");
		});
		document.getElementById("-s").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Plural_input").value = "-s"
			//console.log("-s");
		});
	
	
		var index = -1;
		var PluralList = [document.getElementById("-"), document.getElementById("Umlaut"),
		 document.getElementById("-e"), document.getElementById("Umlaut -e"),
		 document.getElementById("-er"),document.getElementById("Umlaut -er"),
		 document.getElementById("-n"),document.getElementById("-en"),
		 document.getElementById("-s")];
		var Plurallist_string = ['-', 'Umlaut', '-e', 'Umlaut -e', '-er', 'Umlaut -er', '-n', '-en', '-s'] 
	
		function Plural_box_arrows(event){
	
			if (event.key === "ArrowDown" || event.key === "ArrowUp"){
	
				if(event.key === "ArrowDown" && index <= 7){
					index += 1;
					PluralList[index].style.backgroundColor = "grey";
					/*console.log(index);*/
				}
				if(event.key === "ArrowDown" && index >= 1){
					PluralList[index-1].style.backgroundColor = "rgb(33,33,33)";
				}
				if(event.key === "ArrowUp" && index >= 1){
					index -= 1;
					PluralList[index].style.backgroundColor = "grey";
					/*console.log(index);*/
				}
				if(event.key === "ArrowUp" && index <= 7){
					PluralList[index+1].style.backgroundColor = "rgb(33,33,33)";
				}
				
			}
			if(event.key === "Enter"  && Plurallist_string[index] !== undefined){
				document.getElementById("Plural_input").value = Plurallist_string[index];
				console.log(Plurallist_string[index])
				document.querySelector(".plural_box .content").style.display = "none";
				PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				index = -1
				console.log(Plurallist_string[index])
			}
		}
	
		document.getElementById(('Plural_input')).addEventListener('keydown', function(event){
			
			if(event.key === "Enter"  && Plurallist_string[index] === undefined)
			{
				
				clickedin_plural = false
			}
		})
	
		document.getElementById('Plural_input').addEventListener("click", function(event){
			if (checked_in === false){
				clickedin_plural = true
				//console.log(clickedin_plural)
		
		
				document.querySelector(".plural_box .content").style.display = "block";
				document.querySelector(".gender_box .content").style.display = "none";
				event.stopPropagation();
		
				document.querySelector(".Plural_box").addEventListener("keydown", Plural_box_arrows);	
			}
			
	
		});
		document.getElementById('Plural_input').addEventListener('focus', function(event){
			if (document.getElementById('Plural_input') && document.getElementById('Plural_input').id === 'Plural_input'  && checked_in === false) {
				clickedin_plural = true
				document.querySelector(".Plural_box .content").style.display = "block";
				document.querySelector(".Plural_box").addEventListener("keydown", Plural_box_arrows);	
				document.querySelector(".gender_box .content").style.display = "none";
			}
		})
		document.getElementById('Plural_input').addEventListener("blur", function(event){
			//document.querySelector(".plural_box .content").style.display = "none";
			clickedin_plural = false
			//console.log(clickedin_plural)
		});
	
		document.addEventListener("click", function(event) {
			document.querySelector(".Plural_box .content").style.display = "none";
		});
		document.body.addEventListener('click', function(event){
			
			if(index !== -1 && PluralList[index]) {
				PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				index = -1;
				/*console.log('set to default: ' + index);*/
			}
	
			
		})
	
	
	
	
	
	
	
	
	
	
	
		document.getElementById("-").addEventListener("mouseenter", function(event) {
			document.getElementById("-").style.backgroundColor = "grey"
			if(index >=0){
				if(index != 0){
					PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		});
		document.getElementById("-").addEventListener("mouseleave", function(){
			document.getElementById("-").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("Umlaut").addEventListener("mouseenter", function(event) {
			document.getElementById("Umlaut").style.backgroundColor = "grey"
			if(index >=0){
				if(index != 1){
					PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		});
		document.getElementById("Umlaut").addEventListener("mouseleave", function(){
			document.getElementById("Umlaut").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("-e").addEventListener("mouseenter", function(event) {
			document.getElementById("-e").style.backgroundColor = "grey"
			if(index >=0){
				if(index != 2){
					PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		});
		document.getElementById("-e").addEventListener("mouseleave", function(){
			document.getElementById("-e").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("Umlaut -e").addEventListener("mouseenter", function(event) {
			document.getElementById("Umlaut -e").style.backgroundColor = "grey"
			if(index >=0){
				if(index != 3){
					PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		});
		document.getElementById("Umlaut -e").addEventListener("mouseleave", function(){
			document.getElementById("Umlaut -e").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("-er").addEventListener("mouseenter", function(event) {
			document.getElementById("-er").style.backgroundColor = "grey"
			if(index >=0){
				if(index != 4){
					PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		});
		document.getElementById("-er").addEventListener("mouseleave", function(){
			document.getElementById("-er").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("Umlaut -er").addEventListener("mouseenter", function(event) {
			document.getElementById("Umlaut -er").style.backgroundColor = "grey"
			if(index >=0){
				if(index != 5){
					PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		});
		document.getElementById("Umlaut -er").addEventListener("mouseleave", function(){
			document.getElementById("Umlaut -er").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("-n").addEventListener("mouseenter", function(event) {
			document.getElementById("-n").style.backgroundColor = "grey"
			if(index >=0){
				if(index != 6){
					PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		});
		document.getElementById("-n").addEventListener("mouseleave", function(){
			document.getElementById("-n").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("-en").addEventListener("mouseenter", function(event) {
			document.getElementById("-en").style.backgroundColor = "grey"
			if(index >=0){
				if(index != 7){
					PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		});
		document.getElementById("-en").addEventListener("mouseleave", function(){
			document.getElementById("-en").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("-s").addEventListener("mouseenter", function(event) {
			document.getElementById("-s").style.backgroundColor = "grey"
			if(index >=0){
				if(index != 8){
					PluralList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		});
		document.getElementById("-s").addEventListener("mouseleave", function(){
			document.getElementById("-s").style.backgroundColor = "rgb(33,33,33)";
		})
	
		
	});
