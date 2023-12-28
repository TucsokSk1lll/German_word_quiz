//console.log(randomszam)
//console.log(randomszam_alap)
	document.getElementById('Infinitiv_box').style.display = 'none';
	var clickedin_Infinitiv= false

	document.getElementById('Infinitiv_box').addEventListener("click", function(event){
			
		clickedin_Infinitiv = true
		console.log(clickedin_Infinitiv)
		
	});
	document.getElementById('Infinitiv_box').addEventListener("blur", function(event){

		clickedin_Infinitiv = false
		console.log(clickedin_Infinitiv)
		
	});

