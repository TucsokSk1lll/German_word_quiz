
	document.getElementById('Präsens_box').style.display = 'none';


	var clickedin_Präsens = false

	document.getElementById('Präsens_box').addEventListener("click", function(event){
			
		clickedin_Präsens = true
		console.log(clickedin_Präsens)
		
	});
	document.getElementById('Präsens_box').addEventListener("blur", function(event){

		clickedin_Präsens = false
		console.log(clickedin_Präsens)
		
	});
