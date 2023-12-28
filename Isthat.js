
	document.getElementById('Isthat_box').style.display = 'none';

	var clickedin_Isthat = false

	document.getElementById('Isthat_box').addEventListener("click", function(event){
			
		clickedin_Isthat = true
		console.log(clickedin_Isthat)
		
	});
	document.getElementById('Isthat_box').addEventListener("blur", function(event){

		clickedin_Isthat = false
		console.log(clickedin_Isthat)
		
	});
