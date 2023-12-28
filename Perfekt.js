
	document.getElementById('Perfekt_box').style.display = 'none';

	var clickedin_Perfekt = false

	document.getElementById('Perfekt_box').addEventListener("click", function(event){
			
		clickedin_Perfekt = true
		console.log(clickedin_Perfekt)
		
	});
	document.getElementById('Perfekt_box').addEventListener("blur", function(event){

		clickedin_Perfekt = false
		console.log(clickedin_Perfekt)
		
	});
