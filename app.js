//"Races"
{ 
  var playersHandbookRaces = ["Dragonborn","Dwarf","Elf","Gnome","Half-Elf","Halfling","Half-Orc","Human","Tiefling"]
var voloRaces = ["Aasimar","Bugbear","Firbolg","Goblin","Hobgoblin","Kenku","Kobold","Lizardfolk","Orc","Tabaxi","Triton","Yuan-ti Pureblood"]
var guildmasterRaces = ["Centaur","Loxodon","Minotaur","Simic Hybrid","Vedalken"]
var eberronRaces = ["Changeling","Kalashtar","Shifter","Warforged"]
var elementalEvilRaces = ["Aarakocra","Genasi","Goliath"]
}
//"SubclassCategory"
{
var artificerSubClasses = ["Artificer /Armorer/", "Artificer /Alchemist/", "Artificer /Artillerist/", "Artificer /Battle Smith/"];
var barbarianSubClasses = ["Barbarian /Berserker/", "Barbarian /Totem Warrior/"];
var bardSubClasses = ["Bard /Lore/","Bard / Valor/"];
var clericSubClasses = ["Cleric/ Knowledge/","Cleric /Life/","Cleric /Light/","Cleric /Nature/","Cleric /Tempest/","Cleric /Trickery/","Cleric /War/","Cleric /Death/"];
var druidSubClasses = ["Druid /Moon/","Druid /Land/"];
var fighterSubClasses = [ "Fighter /Champion/", "Fighter /BattleMaster/", "Fighter /Eldtritch Knight/"];
var monkSubClasses = ["Monk /Four Elements/","Monk /Open Hand/","Monk /Shadow/"];
var paladinSubClasses = ["Paladin /Ancients/","Paladin /Devotion/","Paladin /Vengeance/","Paladin /Oath Breaker/"];
var rangerSubClasses = ["Ranger /Beast Master/","Ranger /Hunter/"];
var rogueSubClasses = ["Rogue /Arcane Trickster/","Rogue /Assassin/","Rogue /Thief/"];
var sorcerorSubClasses = ["Sorceror /Draconic/","Sorceror /Wild Magic/",];
var warlockSubClasses = ["Warlock /Archfey/","Warlock /Fiend/","Warlock /Great Old One/"];
var wizardSubClasses = ["Wizard /Abjuration/","Wizard /Conjuration/", "Wizard /Divination/", "Wizard /Enchantment/", "Wizard /Evocation/","Wizard /Illusion/","Wizard /Necromancy/","Wizard /Transmutation/",];

var playersHandbookClasses = ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorceror","Warlock","Wizard","Articer"];
}

//"Other Variables"
var backgrounds = ["Acolyte","Charlatan","Criminal","Entertainer","Folk Hero","Guild Artisan","Hermit","Noble","Outlander","Sage","Sailor","Soldier","Urchin"];


var backgroundSubCriminal = ["Criminal /Blackmailer/", "Criminal /Burglar/", "Criminal /Enforcer/", "Criminal /Fence/",  "Criminal /Highway Robber/", "Criminal /Hired Killer/", "Criminal /Pickpocket/","Criminal /Smuggler/","Criminal /Spy/","Criminal /Spy/"];
var backgroundSubEntertainer = ["Entertainer", "Entertainer", "Entertainer", "Entertainer /Gladiator/"];
// var backgroundSubGuildArtisan = ["Guild Artisan /Guild Merchant/" + Math.Floor(Math.random()*20+1)];

var backgroundSubGuildArtisan = ["Guild Artisan /Alchemists and apothecaries/", "Guild Artisan /Armorers, locksmiths, and finesmiths/","Guild Artisan /Brewers, distillers, and vintners/","Guild Artisan /Calligraphers, scribes, and scriveners/","Guild Artisan /Carpenters, roofers, and plasterers/","Guild Artisan /Cartographers, surveyors, and chart-makers/","Guild Artisan /	Cobblers and shoemakers/","Guild Artisan /	Cooks and bakers/", "Guild Artisan /Glassblowers and glaziers/", "Guild Artisan /Jewelers and gemcutters/", "Guild Artisan /Leatherworkers, skinners, and tanners/", "Guild Artisan /Masons and stonecutters/", "Guild Artisan /Painters, limners, and sign-makers/", "Guild Artisan /Potters and tile-makers/", "Guild Artisan /Shipwrights and sail-makers/", "Guild Artisan /Smiths and metal-forgers/", "Guild Artisan /Tinkers, pewterers, and casters/", "Guild Artisan /Wagon-makers and wheelwrights/", "Guild Artisan /Weavers and dyers/", "Guild Artisan /Woodcarvers, coopers, and bowyers/","Guild Artisan /Guild Merchant/", "Guild Artisan /Guild Merchant/", "Guild Artisan /Guild Merchant/", "Guild Artisan /Guild Merchant/", "Guild Artisan /Guild Merchant/"];
var backgroundSubNoble = ["Noble", "Noble", "Noble", "Noble /Knight/"];
var backgroundSubSailor = ["Sailor","Sailor", "Sailor", "Sailor /Pirate/",];

var races = playersHandbookRaces.concat(voloRaces,guildmasterRaces,eberronRaces,elementalEvilRaces);

var classes = playersHandbookClasses;

var bodytype = ["Male", "Female"];

var alignment = ["Lawful Good", "Neutral Good", "Chaotic Good","Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];

function magicformular (placeholder){ var lengthofarray = placeholder.length;
  var randomvalue = Math.random();
  var multiplycationresult = randomvalue*lengthofarray;
  var floorresult = Math.floor(multiplycationresult);
  var selectedelement = placeholder [floorresult];

return selectedelement

}


document.querySelector('#buttonId').addEventListener('click',
function(e){
  e.preventDefault();
  
  selectedrace = magicformular(races);
  selectedclass = magicformular(classes);
  selectedBodyType = magicformular(bodytype);
  selectedbackground = magicformular(backgrounds)
  selectedAlignment = magicformular(alignment);


  if (selectedclass.includes("Articer")){
    selectedclass = magicformular(artificerSubClasses)
  
  }
  else if (selectedclass.includes("Barbarian")){
    selectedclass = magicformular(barbarianSubClasses)
  }
  else if (selectedclass.includes("Bard")){
    selectedclass = magicformular(bardSubClasses)
  }
  else if (selectedclass.includes("Cleric")){
    selectedclass = magicformular(clericSubClasses)
  }
  else if (selectedclass.includes("Druid")){
    selectedclass = magicformular(druidSubClasses)
  }
  else if (selectedclass.includes("Fighter")){
    selectedclass = magicformular(fighterSubClasses)
  }
  else if (selectedclass.includes("Monk")){
    selectedclass = magicformular(monkSubClasses)
  }
  else if (selectedclass.includes("Paladin")){
    selectedclass = magicformular(paladinSubClasses)
  }
  else if (selectedclass.includes("Ranger")){
    selectedclass = magicformular(rangerSubClasses)
  }
  else if (selectedclass.includes("Rogue")){
    selectedclass = magicformular(rpgueSubClasses)
  }
  else if (selectedclass.includes("Sorceror")){
    selectedclass = magicformular(rogueSubClasses)
  }
  else if (selectedclass.includes("Warlock")){
    selectedclass = magicformular(warlockSubClasses)
  }
  else if (selectedclass.includes("Wizard")){
    selectedclass = magicformular(wizardSubClasses)
  }
  
  if (selectedbackground.includes("Sailor")){
     selectedbackground = magicformular(backgroundSubSailor)
  }
  else if (selectedbackground.includes("Criminal")){
    selectedbackground = magicformular(backgroundSubCriminal)
 }
 else if (selectedbackground.includes("Entertainer")){
  selectedbackground = magicformular(backgroundSubEntertainer)
}
else if (selectedbackground.includes("Guild Artisan")){
  selectedbackground = magicformular(backgroundSubGuildArtisan)
}
else if (selectedbackground.includes("Noble")){
  selectedbackground = magicformular(backgroundSubNoble)
}

  document.querySelector("#result").innerHTML = 
  "<br />"+ 
  "Race: " +
  selectedrace 
  + "<br />" + "<br />" + 
  "Class: " +
  selectedclass 
  + "<br />" + "<br />" + 
  "Body Type: " +
  selectedBodyType
  + "<br />" + "<br />" + 
  "Background: " +
  selectedbackground
  + "<br />" + "<br />" + 
  "Alignment: " +
  selectedAlignment;
 
}
);



 