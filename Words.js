const Nouns = {
	'alma': ['der Apfel','Apfel','Äpfel','Apfel','Äpfel'],
};
const Verbs = {
	/*'elindul': ['abfahren','fährt ab','fuhr ab','ist','abgefahren'],
	'elrepül': ['abfliegen','fliegt ab','flog ab','ist','abgeflogen'],
	'lead': ['abgeben','gibt ab','gab ab','hat','abgegeben'],
	'lezár': ['abschliesen','schließt ab','schloss ab','hat','abgeschlossen'],
	'megkínál': ['anbieten','bietet an','bot an','hat','angeboten'],
	'elkezd': ['anfangen','fängt an','fing an','hat','angefangen'],
	'megérkezik': ['ankommen','kommt an','kam an','ist','angekommen'],
	'felhív': ['anrufen','ruft an','rief an','hat','angerufen'],
	'megnéz': ['ansehen','sieht an','sah an','hat','angesehen'],
	'felvesz': ['anziehen','zieht an','zog an','hat','angezogen'],
	'felkel': ['aufstehen','steht auf','stand auf','ist','aufgestanden'],
	'kiad/költ': ['ausgeben','gibt aus','gab aus','hat','ausgegeben'],
	'szórakozni megy': ['ausgehen','geht aus','ging aus','ist','ausgegangen'],
	'kinéz valahogyan': ['aussehen','sieht aus','sah aus','hat','ausgesehen'],
	'kiszáll': ['aussteigen','steigt aus','stieg aus','ist','ausgestiegen'],
	'elköltözik/levetkőzik': ['ausziehen','zieht aus','zog aus','hat','ausgezogen'],
	'süt': ['backen','bäckt','backte','hat','gebacken'],
	'kezd': ['beginnen','beginnt','begann','hat','begonnen'],
	'betart': ['behalten','behält','behilt','hat','behalten'],
	'kap': ['bekommen','bekommt','bekam','hat','bekommen'],*/

	/*'pályázik': ['bewerben','bewirbt','bewarb','hat','beworben'],
	'fordul': ['biegen','biegt','bog','hat','gebogen'],
	'nyújt': ['bieten','bietet','bot','hat','geboten'],
	'kér': ['bitten','bittet','bat','hat','gebeten'],
	'marad': ['bleiben','bleibt','blieb','ist','geblieben'],
	'süt(olajban/zsírban)': ['braten','brät','briet','hat','gebraten'],
	'tör': ['brechen','bricht','brach','hat','gebrochen'],
	'ég': ['brennen','brennt','brannte','hat','gebrannt'],
	'hoz': ['bringen','bringt','brachte','hat','gebracht'],
	'gondol': ['denken','denkt','dachte','hat','gedacht'],
	'eszébe jut': ['einfallen','fällt ein','fiel ein','ist','eingefallen'],
	'meghív': ['einladen','lädt ein','lud ein','hat','eingeladen'],
	'elalszik': ['einschlafen','schläft ein','schlief ein','ist','eingeschlafen'],
	'beszáll': ['einsteigen','steigt ein','stieg ein','ist','eingestiegen'],
	'bevon/behúz': ['einziehen','zieht ein','zog ein','hat','eingezogen'],
	'ajánl/javasol': ['empfehlen','empfiehlt','empfahl','hat','empfohlen'],
	'dönt': ['entscheiden','entscheidet','entschied','hat','entschieden'],
	'eszik': ['essen','isst','aß','hat','gegessen'],
	'utazik': ['fahren','fährt','fuhr','ist','gefahren'],
	'(le)esik': ['fallen','fällt','fiel','ist','gefallen'],
	'fog': ['fangen','fängt','fing','hat','gefangen'],
	
	'tévét néz': ['fernsehen','sieht fern','sah fern','hat','fern gesehen'],
	'talál': ['finden','findet','fand','hat','gefunden'],
	'repül': ['fliegen','fliegt','flog','ist','geflogen'],
	'ad': ['geben','gibt','gab','hat','gegeben'],
	'tetszik': ['gefallen','gefällt','gefiel','hat','gefallen'],
	'megy': ['gehen','geht','ging','ist','gegangen'],
	'történik': ['geschehen','geschieht','geschah','ist','geschehen'],
	'nyer': ['gewinnen','gewinnt','gewann','hat','gewonnen'],
	'van valamilye/birtokol': ['haben','hat','hatte','hat','gehabt'],
	'tart': ['halten','hält','hielt','hat','gehalten'],
	'akaszt': ['hängen','hängt','hing','hat','gehangen'],
	'nevez': ['heißen','heißt','hieß','hat','geheißen'],
	'segít': ['helfen','hilft','half','hat','geholfen'],
	'ismer': ['kennen','kennt','kannte','hat','gekannt'],
	'cseng': ['klingeln','klingelt','klingelte','hat','geklingelt'],
	'jön': ['kommen','kommt','kam','ist','gekommen'],
	'rak': ['laden','lädt','lud','hat','geladen'],
	'hagy': ['lassen','lässt','ließ','hat','gelassen'],
	'fut': ['laufen','läuft','lief','ist','gelaufen'],
	'sajnál': ['leidtun','tut leid','tat leid','hat','leidgetan'],
	'kölcsönad': ['leihen','leiht','lieh','hat','geliehen'],

	'olvas': ['lesen','liest','las','hat','gelesen'],
	'fekszik': ['liegen','liegt','lag','hat','gelegen'],
	'elindul': ['losfahren','fährt los','fuhr los','ist','losgefahren'],
	'magával hoz': ['mitbringen','bringt mit','brachte mit','hat','mitgebracht'],
	'vele jön': ['mitkommen','kommt mit','kam mit','ist','mitgekommen'],
	'magával visz': ['mitnehmen','nimmt mit','nahm mit','hat','mitgenommen'],
	'szeret': ['mögen','mag','mochte','hat','gemocht'],
	'vesz': ['nehmen','nimmt','nahm','hat','genommen'],
	'nevez': ['nennen','nennt','nannte','hat','genannt'],
	'tanácsol': ['raten','rät','riet','hat','geraten'],
	'szagol/szaga van': ['riechen','riecht','roch','hat','gerochen'],
	'szólít/hív': ['rufen','ruft','rief','hat','gerufen'],
	'tűnik': ['scheinen','scheint','schien','hat','geschienen'],
	'alszik': ['schlafen','schläft','schlief','hat','geschlafen'],
	'üt/ver': ['schlagen','schlägt','schlug','hat','geschlagen'],
	'zár': ['schließen','schließt','schloss','hat','geschlossen'],
	'vág': ['schneiden','schneidet','schnitt','hat','geschnitten'],
	'ír': ['schreiben','schreibt','schrieb','hat','geschrieben'],
	'úszik': ['schwimmen','schwimmt','schwamm','ist','geschwommen'],
	'lát': ['sehen','sieht','sah','hat','gesehen'],
	'van': ['sein','ist','war','ist','gewesen'],

	'énekel': ['singen','singt','sang','hat','gesungen'],
	'süllyed': ['sinken','sinkt','sank','ist','gesunken'],
	'ülni': ['sitzen','sitzt','saß','hat','gesessen'],
	'sétálni megy': ['spazieren gehen','geht spazieren','ging spazieren','ist','spazieren gegangen'],
	'beszél': ['sprechen','spricht','sprach','hat','gesprochen'],
	'ugrik': ['springen','springt','sprang','ist','gesprungen'],
	'megtart': ['stattfinden','findet statt','fand statt','hat','stattgefunden'],
	'áll': ['stehen','steht','stand','hat','gestanden'],
	'lop': ['stehlen','stiehlt','stahl','hat','gestohlen'],
	'emelkedik': ['steigen','steigt','stieg','ist','gestiegen'],
	'meghal': ['sterben','stirbt','starb','ist','gestorben'],
	'veszekszik': ['streiten','streitet','stritt','hat','gestritten'],
	'részt vesz': ['teilnehmen','nimmt teil','nahm teil','hat','teilgenommen'],
	'hord/visel': ['tragen','trägt','trug','hat','getragen'],
	'űz/terel': ['treiben','treibt','trieb','hat','getrieben'],
	'találkozik': ['treffen','trifft','traf','hat','getroffen'],
	'lép': ['treten','tritt','trat','hat','getreten'],
	'iszik': ['trinken','trinkt','trank','hat','getrunken'],
	'csinál': ['tun','tut','tat','hat','getan'],
	'közvetít': ['überweisen','überweist','überwies','hat','überwiesen'],
	'átutal': ['überweisen','überweist','überwies','hat','überwiesen'],

	'átszáll': ['umsteigen','steigt um','stieg um','ist','umgestiegen'],
	'átöltözik/elköltözik': ['umziehen','zieht um','zog um','hat','umgezogen'],
	'beszélget': ['unterhalten','unterhält','unterhielt','hat','unterhalten'],
	'vállalkozik': ['unternehmen','unternimmt','unternahm','hat','unternommen'],
	'aláír': ['unterschreiben','unterschreibt','unterschrieb','hat','unterschrieben'],
	'eltölt': ['verbringen','verbringt','verbrachte','hat','verbracht'],
	'elfelejt': ['vergessen','vergisst','vergaß','hat','vergessen'],
	'összehasonlít': ['vergleichen','vergleicht','verglich','hat','verglichen'],
	'elveszít': ['verlieren','verliert','verlor','hat','verloren'],
	'elhalaszt': ['verschieben','verschiebt','verschob','hat','verschoben'],
	'eltűnik': ['verschwinden','verschwindet','verschwand','ist','verschwunden'],
	'megígér': ['versprechen','verspricht','versprach','hat','versprochen'],
	'megért': ['verstehen','versteht','verstand','hat','verstanden'],
	'javasol': ['vorschlagen','schlägt vor','schlug vor','hat','vorgeschlagen'],
	'bemutat(kozik)': ['vorstellen','stellt vor','stellte vor','hat','vorgestellt'],
	'mos': ['waschen','wäscht','wusch','hat','gewaschen'],
	'elmegy': ['weggehen','geht weg','ging weg','ist','weggegangen'],
	'eldob': ['wegwerfen','wirft weg','warf weg','hat','weggeworfen'],
	'fáj': ['wehtun','tut weh','tat weh','hat','wehgetan'],
	'válik valamivé': ['werden','wird','wurde','ist','geworden'],
	'dob': ['werfen','wirft','warf','hat','geworfen'],

	'tud': ['wissen','weiß','wusste','hat','gewusst'],
	'húz': ['ziehen','zieht','zog','hat','gezogen'],
	'boldogul': ['zurechtkommen','kommt zurecht','kam zurecht','ist','zurechtgekommen'],
	'visszajön': ['zurückkommen','kommt zurück','kam zurück','ist','zurückgekommen'],*/	
}

var Noun_Hosszusag = 0;
var Verb_Hosszusag = 0;
var Noun_list = Object.keys(Nouns);
var Verb_list = Object.keys(Verbs);
var NounorVerb = '' 

Object.keys(Nouns).forEach(function(key, index) {
	Nouns[key].order = index;
	Noun_Hosszusag++;
	//Word_list.push(Nouns[key])
});

Object.keys(Verbs).forEach(function(key, index) {
    Verbs[key].order = index ;
    Verb_Hosszusag++;
});

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

//console.log(Noun_list)
//console.log(Verb_list)

