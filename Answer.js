var clickedin_answer = false
var Answer = document.getElementById("Answer_box").value;
var lst_Answer = []
	

document.getElementById('Answer_box').style.display = 'none';

document.getElementById('Answer_box').addEventListener("click", function(event){
			
	clickedin_answer = true
	//console.log(clickedin_answer)
		
});
document.getElementById('Answer_box').addEventListener("blur", function(event){

	clickedin_answer = false
	//console.log(clickedin_answer)
		
});
document.getElementById('Answer_box').addEventListener('focus', function(event){
	console.log('focused')
	document.querySelector(".gender_box .content").style.display = "none";
	document.querySelector(".plural_box .content").style.display = "none";
})
document.addEventListener('keydown', function(event){
	if(event.key === 'Escape'){
		if(document.activeElement){
			document.activeElement.blur();
			document.querySelector(".gender_box .content").style.display = "none";
			document.querySelector(".plural_box .content").style.display = "none";
			cocument.getElementById('focusResetElement').focus();
		}
	}
})
		





