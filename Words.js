const Nouns = {
	'Alma': ['Der','Apfel','Umlaut'],
	'Kolbász': ['Die','Wurst','Umlaut -e'],
	'Asztal':['Der','Tisch','-e'],
	'Szék':['Der','Stuhl','Umlaut -e'],
	'Narancs':['Die', 'Orange','-n'],
	'Erdő':['Der','Wald','Umlaut -er']
}
const Verbs = {
	'megígér': ['versprechen','verspricht','versprach','hat','versprochen'],
	'megért': ['verstehen','versteht','verstand','hat','verstanden'],
	'javasol': ['vorschlagen','schlägt vor','schlug vor','hat','vorgeschlagen'],
	'bemutat(kozik)': ['vorstellen','stellt vor','stellte vor','hat','vorgestellt'],
	'mos': ['waschen','wäscht','wusch','hat','gewaschen'],
	'elmegy': ['weggehen','geht weg','ging weg','ist','weggegangen']
}
const Else = {
	'nagy': 'groß',
	'kicsi': 'klein',
	'hideg': 'kalt',
	'piros': 'rot',
	'tiszta': 'sauber'
}

var Else_Hosszusag = 0;
var Noun_Hosszusag = 0;
var Verb_Hosszusag = 0;
var Noun_list = Object.keys(Nouns);
var Verb_list = Object.keys(Verbs);
var Else_list = Object.keys(Else);
var NounorVerb = '' 

Object.keys(Nouns).forEach(function(key, index) {
	Nouns[key].order = index;
	Noun_Hosszusag++;
	//Word_list.push(Nouns[key])
});

Object.keys(Verbs).forEach(function(key, index) {
    Verbs[key].order = index;
    Verb_Hosszusag++;
});

Object.keys(Else).forEach(function(key, index) {
    Else[key].order = index;
    Else_Hosszusag++;
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

//console.log(Noun_list)
//console.log(Verb_list)

