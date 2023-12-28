
	document.getElementById('Präteritum_box').style.display = 'none';

	
	var clickedin_Präteritum = false

	document.getElementById('Präteritum_box').addEventListener("click", function(event){
			
		clickedin_Präteritum = true
		console.log(clickedin_Präteritum)
		
	});
	document.getElementById('Präteritum_box').addEventListener("blur", function(event){

		clickedin_Präteritum = false
		console.log(clickedin_Präteritum)
		
	});
