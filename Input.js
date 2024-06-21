document.getElementById('focusResetElement').focus()

Dictionary_name = undefined;
Dictionary = {
	/*'megígér': ['versprechen','verspricht','versprach','hat','versprochen'],
	 'megért': ['verstehen','versteht','verstand','hat','verstanden'],
	 'javasol': ['vorschlagen','schlägt vor','schlug vor','hat','vorgeschlagen'],
	 'bemutat(kozik)': ['vorstellen','stellt vor','stellte vor','hat','vorgestellt'],
	 'mos': ['waschen','wäscht','wusch','hat','gewaschen'],*/
};

var Button_Noun_or_Verb = undefined;

//document.getElementById('lel').style.width = document.getElementById('lokuki').offsetWidth + 'px';	
/*console.log(document.getElementById('e1').offsetWidth + document.getElementById('e2').offsetWidth + document.getElementById('e3').offsetWidth +
document.getElementById('e4').offsetWidth + document.getElementById('e5').offsetWidth + document.getElementById('e6').offsetWidth);*/


//console.log(document.getElementById('e1').offsetWidth);




document.getElementById('Create_button').addEventListener('click', function() {
	Button_Noun_or_Verb = 'Noun';
	

	if (Dictionary_name_box.value != '') {
		Dictionary_name = Dictionary_name_box.value;
		console.log(Dictionary_name);
	}
	else {
		Dictionary_name = 'New Dictionary';
		console.log(Dictionary_name);
	}

	document.getElementById('Dictionary_name_display').style.display = 'block';
	document.getElementById('Dictionary_name_display').innerHTML = Dictionary_name;

	document.getElementById('Create_button').style.display = 'none';
	document.getElementById('Dictionary_name_box').style.display = 'none';

	document.getElementById('Noun_button').style.display = 'inline';
	document.getElementById('Verb_button').style.display = 'inline';

	document.getElementById('Word_box').addEventListener('focus', function(event){
		console.log('focused')
		document.querySelector(".gender_box .content").style.display = "none";
		document.querySelector(".plural_box .content").style.display = "none";
	})
		console.log('Noun');
		document.getElementById('Dictionary_name_display').style.display = 'block';
		document.getElementById('Gender_input').style.display = 'block';
		document.getElementById('Answer_box').style.display = 'block';
		document.getElementById('Plural_input').style.display = 'block';
		document.getElementById('Word_box').style.display = 'block';
		document.getElementById('Save_button').style.display = 'block';

		document.getElementById('Noun_button').style.backgroundColor = 'rgb(54, 54, 54)';
		document.getElementById('Verb_button').style.backgroundColor = 'rgb(24, 24, 24)';
	
	
	
	document.getElementById('Noun_button').addEventListener('click', function() {
		console.log('Noun');
	
		Button_Noun_or_Verb = 'Noun';
	
		document.getElementById('Word_box').style.display = 'none';
		document.getElementById('Infinitiv_box').style.display = 'none';
		document.getElementById('Präsens_box').style.display = 'none';
		document.getElementById('Präteritum_box').style.display = 'none';
		document.getElementById('Isthat_box').style.display = 'none';
		document.getElementById('Perfekt_box').style.display = 'none';
	
		document.getElementById('Gender_input').style.display = 'block';
		document.getElementById('Answer_box').style.display = 'block';
		document.getElementById('Plural_input').style.display = 'block';
		document.getElementById('Word_box').style.display = 'block';
	
	
	
		document.getElementById('Noun_button').style.backgroundColor = 'rgb(54, 54, 54)';
		document.getElementById('Verb_button').style.backgroundColor = 'rgb(24, 24, 24)';
	});
	document.getElementById('Verb_button').addEventListener('click', function() {
		console.log('Verb');
	
		Button_Noun_or_Verb = 'Verb';
	
		document.getElementById('Gender_input').style.display = 'none';
		document.getElementById('Answer_box').style.display = 'none';
		document.getElementById('Plural_input').style.display = 'none';
		document.getElementById('Word_box').style.display = 'none';
	
		document.getElementById('Word_box').style.display = 'block';
		document.getElementById('Infinitiv_box').style.display = 'block';
		document.getElementById('Präsens_box').style.display = 'block';
		document.getElementById('Präteritum_box').style.display = 'block';
		document.getElementById('Isthat_box').style.display = 'block';
		document.getElementById('Perfekt_box').style.display = 'block';
	
		document.getElementById('Noun_button').style.backgroundColor = 'rgb(24, 24, 24)';
		document.getElementById('Verb_button').style.backgroundColor = 'rgb(54, 54, 54)';
	});
	
});

document.getElementById('Save_button').addEventListener('click', function(){

	if((document.getElementById('Gender_input').style.display !== 'none' && document.getElementById('Gender_input').value !== ''
	&& document.getElementById('Answer_box').style.display !== 'none' && document.getElementById('Answer_box').value !== ''
	&& document.getElementById('Plural_input').style.display !== 'none' && document.getElementById('Plural_input').value !== ''
	&& document.getElementById('Word_box').style.display !== 'none' && document.getElementById('Word_box').value !== '')){
	
		
		Dictionary[document.getElementById('Word_box').value] = [document.getElementById('Gender_input').value,
					 document.getElementById('Answer_box').value, document.getElementById('Plural_input').value];
		
		document.getElementById('Gender_input').value = ''	
		document.getElementById('Answer_box').value = ''
		document.getElementById('Plural_input').value = ''	
		document.getElementById('Word_box').value = ''	 
		console.log(Dictionary);
	}

	if(document.getElementById('Infinitiv_box').style.display !== 'none' && document.getElementById('Infinitiv_box').value !== ''
	&& document.getElementById('Präsens_box').style.display !== 'none' && document.getElementById('Präsens_box').value !== ''
	&& document.getElementById('Präteritum_box').style.display !== 'none' && document.getElementById('Präteritum_box').value !== ''
	&& document.getElementById('Isthat_box').style.display !== 'none' && document.getElementById('Isthat_box').value !== ''
	&& document.getElementById('Word_box').style.display !== 'none' && document.getElementById('Word_box').value !== '' && Button_Noun_or_Verb === 'Verb'){

		Dictionary[document.getElementById('Word_box').value] = [document.getElementById('Infinitiv_box').value,
					 document.getElementById('Präsens_box').value, document.getElementById('Präteritum_box').value, document.getElementById('Isthat_box').value,
					 document.getElementById('Perfekt_box').value];
		document.getElementById('Infinitiv_box').value = ''
		document.getElementById('Präsens_box').value = ''
		document.getElementById('Präteritum_box').value = ''
		document.getElementById('Isthat_box').value = ''
		document.getElementById('Perfekt_box').value = ''
		document.getElementById('Word_box').value = ''
		console.log(Dictionary);
	}

});

document.addEventListener('keydown', function(event) {

	if(event.key === 'Enter' 
	&& (document.getElementById('Gender_input').style.display !== 'none' && document.getElementById('Gender_input').value !== ''
	&& document.getElementById('Answer_box').style.display !== 'none' && document.getElementById('Answer_box').value !== ''
	&& document.getElementById('Plural_input').style.display !== 'none' && document.getElementById('Plural_input').value !== ''
	&& document.getElementById('Word_box').style.display !== 'none' && document.getElementById('Word_box').value !== '')){
		
		Dictionary[document.getElementById('Word_box').value] = [document.getElementById('Gender_input').value,
					 document.getElementById('Answer_box').value, document.getElementById('Plural_input').value];

		/*if(Dictionary.length === 1)
		{
			document.getElementById('e1').innerText = Object.entries(Dictionary)[0][0] + ':';
			document.getElementById('e2').innerText = Object.entries(Dictionary)[0][1][0].toLowerCase();
			document.getElementById('e3').innerText = Object.entries(Dictionary)[0][1][1];
			document.getElementById('e4').innerText = Object.entries(Dictionary)[0][1][2];
			document.getElementById('e5').innerText = ''
			document.getElementById('e6').innerText = ''
			
			document.getElementById('Gender_input').value = ''	
			document.getElementById('Answer_box').value = ''
			document.getElementById('Plural_input').value = ''	
			document.getElementById('Word_box').value = ''	 
			console.log(Dictionary);
		}*/

		
	}

	if(event.key === 'Enter' 
	&& (document.getElementById('Infinitiv_box').style.display !== 'none' && document.getElementById('Infinitiv_box').value !== ''
	&& document.getElementById('Präsens_box').style.display !== 'none' && document.getElementById('Präsens_box').value !== ''
	&& document.getElementById('Präteritum_box').style.display !== 'none' && document.getElementById('Präteritum_box').value !== ''
	&& document.getElementById('Isthat_box').style.display !== 'none' && document.getElementById('Isthat_box').value !== ''
	&& document.getElementById('Word_box').style.display !== 'none' && document.getElementById('Word_box').value !== '' && Button_Noun_or_Verb === 'Verb')){

		Dictionary[document.getElementById('Word_box').value] = [document.getElementById('Infinitiv_box').value,
					 document.getElementById('Präsens_box').value, document.getElementById('Präteritum_box').value, document.getElementById('Isthat_box').value,
					 document.getElementById('Perfekt_box').value];
		document.getElementById('Infinitiv_box').value = ''
		document.getElementById('Präsens_box').value = ''
		document.getElementById('Präteritum_box').value = ''
		document.getElementById('Isthat_box').value = ''
		document.getElementById('Perfekt_box').value = ''
		document.getElementById('Word_box').value = ''
		console.log(Dictionary);
	}
	

	/*if(event.key === 'Enter' && Button_Noun_or_Verb === 'Noun'){
		Dictionary[document.getElementById('Word_box').value] = [document.getElementById('Gender_input').value,
					 document.getElementById('Answer_box').value, document.getElementById('Plural_input').value];
		console.log(Dictionary);
	}*/
});


document.body.addEventListener('keydown', function(event) {

	if(event.key === 'Enter' && window.getComputedStyle(document.getElementById('Create_button')).display !== 'none') {
		var Button_Noun_or_Verb = 'Noun';

		document.getElementById('Create_button').style.display = 'none';
		document.getElementById('Dictionary_name_box').style.display = 'none';

		document.getElementById('Noun_button').style.display = 'inline';
		document.getElementById('Verb_button').style.display = 'inline';

		document.getElementById('Word_box').addEventListener('focus', function(event){
			console.log('focused')
			document.querySelector(".gender_box .content").style.display = "none";
			document.querySelector(".plural_box .content").style.display = "none";
		})

		if (Button_Noun_or_Verb === 'Noun') {
			console.log('Noun');
			document.getElementById('Gender_input').style.display = 'block';
			document.getElementById('Answer_box').style.display = 'block';
			document.getElementById('Plural_input').style.display = 'block';
			document.getElementById('Word_box').style.display = 'block';
			document.getElementById('Noun_button').style.backgroundColor = 'rgb(54, 54, 54)';
			document.getElementById('Verb_button').style.backgroundColor = 'rgb(24, 24, 24)';
		}
		else if (Button_Noun_or_Verb === 'Verb') {
			console.log('Verb');
			document.getElementById('Perfekt_box').style.display = 'block';
			document.getElementById('Word_box').style.display = 'block';
			document.getElementById('Answer_box').style.display = 'block';
		
			document.getElementById('Verb_button').style.backgroundColor = 'rgb(54, 54, 54)';
			document.getElementById('Noun_button').style.backgroundColor = 'rgb(24, 24, 24)';
		}
		
		document.getElementById('Noun_button').addEventListener('click', function() {
			console.log('Noun');
		
			Button_Noun_or_Verb = 'Noun';
		
			document.getElementById('Word_box').style.display = 'none';
			document.getElementById('Infinitiv_box').style.display = 'none';
			document.getElementById('Präsens_box').style.display = 'none';
			document.getElementById('Präteritum_box').style.display = 'none';
			document.getElementById('Isthat_box').style.display = 'none';
			document.getElementById('Perfekt_box').style.display = 'none';
		
			document.getElementById('Gender_input').style.display = 'block';
			document.getElementById('Answer_box').style.display = 'block';
			document.getElementById('Plural_input').style.display = 'block';
			document.getElementById('Word_box').style.display = 'block';
		
		
		
			document.getElementById('Noun_button').style.backgroundColor = 'rgb(54, 54, 54)';
			document.getElementById('Verb_button').style.backgroundColor = 'rgb(24, 24, 24)';
		});
		document.getElementById('Verb_button').addEventListener('click', function() {
			console.log('Verb');
		
			Button_Noun_or_Verb = 'Verb';
		
			document.getElementById('Gender_input').style.display = 'none';
			document.getElementById('Answer_box').style.display = 'none';
			document.getElementById('Plural_input').style.display = 'none';
			document.getElementById('Word_box').style.display = 'none';
		
			document.getElementById('Word_box').style.display = 'block';
			document.getElementById('Infinitiv_box').style.display = 'block';
			document.getElementById('Präsens_box').style.display = 'block';
			document.getElementById('Präteritum_box').style.display = 'block';
			document.getElementById('Isthat_box').style.display = 'block';
			document.getElementById('Perfekt_box').style.display = 'block';
		
			document.getElementById('Noun_button').style.backgroundColor = 'rgb(24, 24, 24)';
			document.getElementById('Verb_button').style.backgroundColor = 'rgb(54, 54, 54)';
		});
	}
	
});
