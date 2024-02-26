var clickedin_gender = false
	

document.getElementById('Gender_input').style.display = 'none';

	document.addEventListener("DOMContentLoaded", function() {
		
		

		document.getElementById("Der").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Gender_input").value = "Der"
			//console.log("Der");
		});
		document.getElementById("Die").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Gender_input").value = "Die"
			//console.log("Die");
		});
		document.getElementById("Das").addEventListener("click", function(event) {
			event.preventDefault();
			document.getElementById("Gender_input").value = "Das"
			//console.log("Das");
			
		});
	
		var index = -1;
		var GenderList = [document.getElementById("Der"), document.getElementById("Die"), document.getElementById("Das")];
		var Genderlist_string = ['Der', 'Die', 'Das'] 
	
		function Gender_box_arrows(event){
	
			if (event.key === "ArrowDown" || event.key === "ArrowUp"){
	
				if(event.key === "ArrowDown" && index <= 1){
					index += 1;
					GenderList[index].style.backgroundColor = "grey";
					console.log(index);
				}
				if(event.key === "ArrowDown" && index >= 1){
					GenderList[index-1].style.backgroundColor = "rgb(33,33,33)";
				}
				if(event.key === "ArrowUp" && index >= 1){
					index -= 1;
					GenderList[index].style.backgroundColor = "grey";
					console.log(index);
				}
				if(event.key === "ArrowUp" && index <= 1){
					GenderList[index+1].style.backgroundColor = "rgb(33,33,33)";
				}
				
			}
			document.getElementById('Gender_input').focus()
			if(event.key === "Enter"  && Genderlist_string[index] !== undefined && checked_in === false){
				console.log('enter')
				document.getElementById("Gender_input").value = Genderlist_string[index];
				document.querySelector(".gender_box .content").style.display = "none";
				GenderList[index].style.backgroundColor = "rgb(33,33,33)";
				index = -1
				console.log(Genderlist_string[index])
			}
		}
	
		document.getElementById(('Gender_input')).addEventListener('keydown', function(event){
			if(event.key === 'Tab'){
				document.querySelector(".plural_box .content").style.display = "none";
			}
			if(event.key === "Enter"  && Genderlist_string[index] === undefined)
			{
				console.log('asfdaefeaf')
				clickedin_gender = false
			}
			
		})
	
		document.getElementById('Gender_input').addEventListener("click", function(event){
			clickedin_gender = true
	
			document.querySelector(".gender_box .content").style.display = "block";
			document.getElementById('Der').style.display = 'block';
			document.getElementById('Die').style.display = 'block';
			document.getElementById('Das').style.display = 'block';
			document.querySelector(".plural_box .content").style.display = "none";
			event.stopPropagation();
	
			document.querySelector(".Gender_box").addEventListener("keydown", Gender_box_arrows);	
	
		});
		document.getElementById('Gender_input').addEventListener('focus', function(event){
			if (document.getElementById('Gender_input').id === 'Gender_input') {
				clickedin_gender = true
				document.querySelector(".gender_box .content").style.display = "block";
				document.querySelector(".Gender_box").addEventListener("keydown", Gender_box_arrows);	
			}
		})
	
	
		document.getElementById('Gender_input').addEventListener("blur", function(event){
			clickedin_gender = false
			//document.querySelector(".gender_box .content").style.display = "none";
			//console.log(clickedin_gender)
		})
	
		document.addEventListener("click", function(event) {
			document.querySelector(".Gender_box .content").style.display = "none";
		});
		document.body.addEventListener('click', function(event){	0
			
			if(index !== -1 && GenderList[index]) {
				GenderList[index].style.backgroundColor = "rgb(33,33,33)";
				index = -1;
				console.log('set to default: ' + index);
			}
	
			document.body.removeEventListener("click", Gender_box_arrows);
		})
		document.getElementById("Der").addEventListener("mouseenter", function(){
			document.getElementById("Der").style.backgroundColor = "grey";
			
			if(index >=0){
				if(index != 0){
					GenderList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
				
			}
		})
		document.getElementById("Der").addEventListener("mouseleave", function(){
			document.getElementById("Der").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("Die").addEventListener("mouseenter", function(){
			document.getElementById("Die").style.backgroundColor = "grey"
	
			if(index >=0){
				if(index != 1){
					GenderList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		})
		document.getElementById("Die").addEventListener("mouseleave", function(){
			document.getElementById("Die").style.backgroundColor = "rgb(33,33,33)";
		})
		document.getElementById("Das").addEventListener("mouseenter", function(){
			document.getElementById("Das").style.backgroundColor = "grey";
	
			if(index >=0){
				if(index != 2){
					GenderList[index].style.backgroundColor = "rgb(33,33,33)";
				}
				index = -1;
				console.log('set to default: ' + index);
			}
		})
		document.getElementById("Das").addEventListener("mouseleave", function(){
			document.getElementById("Das").style.backgroundColor = "rgb(33,33,33)";
		})
	
		
		
	});

	


