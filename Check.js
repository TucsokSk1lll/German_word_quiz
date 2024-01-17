
const Answer_box = {};
var checked_in = false 
var randomszam ;

var randomszam_alap = getRandomInt(0,Noun_Hosszusag + Verb_Hosszusag)

	

	if(randomszam_alap < Noun_Hosszusag){
		document.getElementById('Word').textContent = Object.keys(Nouns)[randomszam_alap];
		NounorVerb = 'Noun'
	}
	else{
		randomszam_alap -= Noun_Hosszusag
		document.getElementById('Word').textContent = Object.keys(Verbs)[randomszam_alap];
		NounorVerb = 'Verb'
	}
	
	if(NounorVerb === 'Noun'){
		document.getElementById('Gender_input').style.display = 'block';
		document.getElementById('Answer_box').style.display = 'block';
		document.getElementById('Plural_input').style.display = 'block';
	}
	else{
		document.getElementById('Infinitiv_box').style.display = 'block';
		document.getElementById('Präsens_box').style.display = 'block';
		document.getElementById('Präteritum_box').style.display = 'block';
		document.getElementById('Isthat_box').style.display = 'block';
		document.getElementById('Perfekt_box').style.display = 'block';
	}

	document.body.addEventListener('keydown', function(event){

		if((event.key === 'Enter' && clickedin_gender === false && 
		clickedin_answer === false && clickedin_plural === false && 
		window.getComputedStyle(document.getElementById("Der")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("Die")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("Das")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("-")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("Umlaut")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("-e")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("Umlaut -e")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("-er")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("Umlaut -er")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("-n")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("-en")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("-s")).backgroundColor.toLowerCase() != "rgb(128, 128, 128)" &&
		window.getComputedStyle(document.getElementById("Infinitiv_box")).display === 'none') || 
		(event.key === 'Enter' && clickedin_Infinitiv === false && 
		clickedin_Präsens === false && clickedin_Präteritum === false &&
		clickedin_Isthat === false && clickedin_Perfekt === false &&
		window.getComputedStyle(document.getElementById("Answer_box")).display === 'none')){
			
			
			if(checked_in === false){
				checked_in = true
			}
			else{
				checked_in = false
			}
	
			if(randomszam_alap === undefined && checked_in === false){
				randomszam = getRandomInt(0,Noun_Hosszusag+Verb_Hosszusag);
				console.log('random szam (REGENERATED): '+randomszam)

				if(randomszam_alap < Noun_Hosszusag){
					NounorVerb = 'Noun'
				}
				else{
					NounorVerb = 'Verb'
				}


				if(randomszam < Noun_Hosszusag){

					console.log('!!!NOUN!!!: ' + Object.keys(Nouns)[randomszam])

					document.getElementById('Word').textContent = Object.keys(Nouns)[randomszam];

					document.getElementById('Gender_input').style.display = 'block';
					document.getElementById('Answer_box').style.display = 'block';
					document.getElementById('Plural_input').style.display = 'block';

					document.getElementById('Infinitiv_box').style.display = 'none';
					document.getElementById('Präsens_box').style.display = 'none';
					document.getElementById('Präteritum_box').style.display = 'none';
					document.getElementById('Isthat_box').style.display = 'none';
					document.getElementById('Perfekt_box').style.display = 'none';
				}
				else{
					randomszam = randomszam - Noun_Hosszusag

					document.getElementById('Word').textContent = Object.keys(Verbs)[randomszam];

					document.getElementById('Infinitiv_box').style.display = 'block';
					document.getElementById('Präsens_box').style.display = 'block';
					document.getElementById('Präteritum_box').style.display = 'block';
					document.getElementById('Isthat_box').style.display = 'block';
					document.getElementById('Perfekt_box').style.display = 'block';

					document.getElementById('Gender_input').style.display = 'none';
					document.getElementById('Answer_box').style.display = 'none';
					document.getElementById('Plural_input').style.display = 'none';
				}

				
			}
			else if(randomszam_alap != undefined && checked_in === true){
				randomszam = randomszam_alap;
				randomszam_alap = undefined;
			}
	
			if(checked_in === true){

				function NoSpaces(Answer,box){

					if(Answer !== ''){
						let lst_Answer = []
	
						for(i=0;i <= Answer.length;i++){
							if(Answer[i] !== undefined){
								lst_Answer.push(Answer[i])
							}
							
						}
						
						while(lst_Answer[0] === ' ' || lst_Answer[0] === undefined){
							lst_Answer = lst_Answer.slice(1)
						}
						while(lst_Answer[lst_Answer.length-1] === ' ' || lst_Answer[lst_Answer.length-1] === undefined){
							lst_Answer = lst_Answer.slice(0,-1)
						}
						
						Answer = ''
						for(i=0;i <= lst_Answer.length-1;i++){
							Answer += lst_Answer[i]
						}

						if(box === 'Answer_box'){
							Answer = Answer.toLowerCase();
							Answer = Answer.charAt(0).toUpperCase() + Answer.slice(1);
							document.getElementById(box).value = Answer;
						}
						else{
							Answer = Answer.toLowerCase();
							//Answer = Answer.charAt(0).toUpperCase() + Answer.slice(1);
							document.getElementById(box).value = Answer;
						}
						


					}
					return Answer;
				}
				


				if(NounorVerb === 'Noun'){
					Answer = NoSpaces(document.getElementById('Answer_box').value,'Answer_box')
				}
				else{

					Answer_Infinitiv = NoSpaces(document.getElementById('Infinitiv_box').value,'Infinitiv_box')
					Answer_Präsens = NoSpaces(document.getElementById('Präsens_box').value,'Präsens_box')
					Answer_Präteritum = NoSpaces(document.getElementById('Präteritum_box').value,'Präteritum_box')
					Answer_Isthat = NoSpaces(document.getElementById('Isthat_box').value,'Isthat_box')
					Answer_Perfekt = NoSpaces(document.getElementById('Perfekt_box').value,'Perfekt_box')
				}
	
				document.getElementById('focusResetElement').focus()
	
				if(randomszam === undefined){
					randomszam = randomszam_alap
				}
				if(window.getComputedStyle(document.getElementById("Answer_box")).display === 'block'){
					Answer_box['Answer_box'] = [document.getElementById('Gender_input').value,Answer,document.getElementById('Plural_input').value]
					
					if(Answer_box['Answer_box'][0] == Nouns[Noun_list[randomszam]][0]){
						document.getElementById('Gender_input').style.color = 'green';
						
					}
					else {
						document.getElementById('Wrong_gender').style.display = 'block';
						document.getElementById('Wrong_gender').innerText = Answer_box['Answer_box'][0];
						document.getElementById('Gender_input').value = Nouns[Noun_list[randomszam]][0];
						document.getElementById('Gender_input').style.color = 'red'; 
					}
		
					if(Answer_box['Answer_box'][1].toLowerCase() == Nouns[Noun_list[randomszam]][1].toLowerCase()){
						document.getElementById('Answer_box').style.color = 'green';
					}
					else {
						document.getElementById('Wrong_answer').style.display = 'block';
						document.getElementById('Wrong_answer').innerText = Answer_box['Answer_box'][1];
						document.getElementById('Answer_box').value = Nouns[Noun_list[randomszam]][1];
						document.getElementById('Answer_box').style.color = 'red';
					}
		
					if(Answer_box['Answer_box'][2] == Nouns[Noun_list[randomszam]][2]){
						document.getElementById('Plural_input').style.color = 'green';
					}
					else {
						
						document.getElementById('Wrong_plural').style.display = 'block';
						document.getElementById('Wrong_plural').innerText = Answer_box['Answer_box'][2];
						document.getElementById('Plural_input').value = Nouns[Noun_list[randomszam]][2];
						document.getElementById('Plural_input').style.color = 'red';
					}
				}
				else{
					Answer_box['Answer_box'] = [Answer_Infinitiv,Answer_Präsens,Answer_Präteritum,Answer_Isthat,Answer_Perfekt]
					
					if(Answer_box['Answer_box'][0] == Verbs[Verb_list[randomszam]][0]){
						document.getElementById('Infinitiv_box').style.color = 'green';
						
					}else{
						document.getElementById('Wrong_infinitiv').style.display = 'block';
						document.getElementById('Wrong_infinitiv').innerText = Answer_box['Answer_box'][0];
						document.getElementById('Infinitiv_box').value = Verbs[Verb_list[randomszam]][0];
						document.getElementById('Infinitiv_box').style.color = 'red';
					}
					if(Answer_box['Answer_box'][1] == Verbs[Verb_list[randomszam]][1]){
						document.getElementById('Präsens_box').style.color = 'green';
						
					}else{
						document.getElementById('Wrong_präsens').style.display = 'block';
						document.getElementById('Wrong_präsens').innerText = Answer_box['Answer_box'][1];
						document.getElementById('Präsens_box').value = Verbs[Verb_list[randomszam]][1];
						document.getElementById('Präsens_box').style.color = 'red';
					}
					if(Answer_box['Answer_box'][2] == Verbs[Verb_list[randomszam]][2]){
						document.getElementById('Präteritum_box').style.color = 'green';
						
					}else{
						document.getElementById('Wrong_präteritum').style.display = 'block';
						document.getElementById('Wrong_präteritum').innerText = Answer_box['Answer_box'][2];
						document.getElementById('Präteritum_box').value = Verbs[Verb_list[randomszam]][2];
						document.getElementById('Präteritum_box').style.color = 'red';
					}
					if(Answer_box['Answer_box'][3] == Verbs[Verb_list[randomszam]][3]){
						document.getElementById('Isthat_box').style.color = 'green';
						
					}else{
						document.getElementById('Wrong_isthat').style.display = 'block';
						document.getElementById('Wrong_isthat').innerText = Answer_box['Answer_box'][3];
						document.getElementById('Isthat_box').value = Verbs[Verb_list[randomszam]][3];
						document.getElementById('Isthat_box').style.color = 'red';
					}
					if(Answer_box['Answer_box'][4] == Verbs[Verb_list[randomszam]][4]){
						document.getElementById('Perfekt_box').style.color = 'green';
						
					}else{
						console.log(Answer_box['Answer_box'][4])
						console.log(Verbs[Verb_list[randomszam]][4])
						document.getElementById('Wrong_perfekt').style.display = 'block';
						document.getElementById('Wrong_perfekt').innerText = Answer_box['Answer_box'][4];
						document.getElementById('Perfekt_box').value = Verbs[Verb_list[randomszam]][4];
						document.getElementById('Perfekt_box').style.color = 'red';
					}
				}
			}

			if(checked_in === false){
					//document.getElementById('Word').textContent = Object.keys(Nouns)[randomszam];
					document.getElementById('Plural_input').style.color = 'white';
					document.getElementById('Answer_box').style.color = 'white';
					document.getElementById('Gender_input').style.color = 'white';
					document.getElementById('Gender_input').value = '';
					document.getElementById('Answer_box').value = '';
					document.getElementById('Plural_input').value = '';

					document.getElementById('Infinitiv_box').style.color = 'white';
					document.getElementById('Präsens_box').style.color = 'white';
					document.getElementById('Präteritum_box').style.color = 'white';
					document.getElementById('Isthat_box').style.color = 'white';
					document.getElementById('Perfekt_box').style.color = 'white';
					document.getElementById('Infinitiv_box').value = '';
					document.getElementById('Präsens_box').value = '';
					document.getElementById('Präteritum_box').value = '';
					document.getElementById('Isthat_box').value = '';
					document.getElementById('Perfekt_box').value = '';


					document.getElementById('Wrong_answer').textContent = '';
					Answer = ''
					document.getElementById('Wrong_gender').textContent = '';
					document.getElementById('Wrong_plural').textContent = '';

					document.getElementById('Wrong_infinitiv').textContent = '';
					document.getElementById('Wrong_präsens').textContent = '';
					document.getElementById('Wrong_präteritum').textContent = '';
					document.getElementById('Wrong_isthat').textContent = '';
					document.getElementById('Wrong_perfekt').textContent = '';

					console.log('DDD')
			}
			
		}
		
	})