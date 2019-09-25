// typing out what logic i need/want so that i do not forget

// Job selection
/*
on button click of either job a modal will show up with the job's stats and a confirmation/cancellation button and store that info with redux
warrior's damage will take the (str * 1.2) minus targets def
warrior's damage roll may induce a bleed effect(not final)
-not final damage calculations
theif's damage will take the (agi + (str*.2)) minus targets def
theif's damage roll may have a chance to hit twice(not final, but more likely to happen)
Luk(rare) stat (currently) cannot be increased wihtout equipment, either increases item drops
or crit rate
*/
//on confirmation click of job selection will store the class's information into redux
//exp gain: when gaining exp it will add to current exp and then after it will then look at current level and compare current level exp to accumlated exp and if it exceeds level will rise, if not nothing happens
//maybe convert str/agi into a dmg stat 

// Options Page
/*
-Explore Button: 5/10 times will encounter a mob, 1/10 will encounter an npc/merchant(rare),
2/10 to encouter nothing, 1/10 times to randomly obtain item/money, 1/10 of being robbed
-Rest Button: self explanatory, will recover 10% of hp/mp(if skills/magic are incorporated)
1/10 chance to meet npc/merchant
-Status: checks current status and equipped items, info stored in redux
-Inventory: Will show all the loot obtained and gold, info store in redux
-DataBook: not sure if this will be used but will most likely contain monster info/loot
and other miscellaneous info
-Each button will display a modal
*/
//explore button
explore(){
let rng = this.diceRoll()
  if (rng == 10){
    this.getRobbed()
  } else if (rng == 9){
    this.randomItem()
  } else if (rng == 8 || rng == 7){
    null
  } else if (rng == 6){
    this.merchantAppear()
  } else {
    this.mobEncounter()
  }
}

diceRoll(){
  return rng = Math.floor(Math.random() * 10) + 1
}

mobEncounter(){
  //create a counter enemies defeated once it hits 10 the mob will be a boss rather than a regular mob
if(mobEncouter !== 10){
  let mob = []
  let mobList = mobDataSheet
  //need to make a seperate mob character sheet and randomly select it
  let mSpecies = mobList[Math.floor(math.random() * mobList.length)]
  let rng = Math.floor(Math.random() * 10) + 1
if(rng == 7){
  return mLvl = char.Level + (Math.floor(Math.random() * 5) + 1) *1.5
}
  let mLvl = char.Level + (Math.floor(Math.random() * 5) + 1)
  let def = something
} else{
  //once a boss is encountered will reset the mob encouter to 0  
  mobBoss
}

}

getRobbed(){
  let itemList = char.inventory
  let stolenItem = itemList[Math.floor(math.random() * itemList.length)]
  return stolenItem
}

takeABreak(){
  let maxHp = char.maxHp
  let currentHp = char.currHp
  let recoverHp = maxHp * .1
  //insert redux equation in adding current hp and recoveredHp
}

//might make checking status also show inventory
checkStatus(){
  displayModal(charStats, charInventory)
}

readDataBook(){
  displayModal(dataBook)
}

//Battle Screen
/*
Not if i want images or not
will most likely look like battlescreen 2, 
after each action will display both sides hp
-Damage/Dodge Dice: 10 sided die, depending on the stats certain sides will hit/miss/crit
will/should take in consideration on level difference
if within 3 levels will have a 10% chance to miss, if lower than 5 levels will never miss, 
if higher than 5 level may have higher chances to miss
equipment can make up for level difference 
maybe give both jobs a skill that can only be activated randomly
-Flee Dice: level difference will affect chances of fleeing, chance of dropping gold on 
successful feeling
-Potions/Items: Potions will recover 10-25% of hp, potential chance of adding in other
items to help will battling
 */
//dmg dice
//need to work on dmg logic
dmgDice(){
  let roll = this.diceRoll()
  if(roll == Math.floor(Math.random() * 10) + 1){
    "miss"
  } else {
    "Hit"
  }
}

dgeDice(){
  let roll = this.diceRoll()
  if(roll == Math.floor(Math.random() * 10) + 1){
    "dodged"
  } else {
    "Hit"
  }
}

usePotion(){
  let maxHp = char.maxHp
  let currentHp = char.currHp
  let recoverHp = maxHp * .1
  //insert redux equation in adding current hp and recoveredHp
}

fleeDice(){
  let roll = this.diceRoll()
  if(roll == 1 || roll == 3 || roll == 5 || roll == 7|| roll ==9 ){
    "Flee successful"
  } else {
    "Flee Failed"
  }
}


//Post Battle
/* 
Shows acquired loot,exp and gold nothing too special
*/

//Merchant
/*
Will either appear after boss fight, randomly at a rest stop or random encouter while exploring
Items will always be the same but stats they provide should differ, will probably change 
if i add more than just basic equipment(mobs currently drop "weapon", "armor", potions and monster drops)
can also sell items
maybe add merchant level where a rare/powerful weapon will have a low chance of appearing
*/

//merchant appears
merchantAppear(){
let inventory = []
let potions = this.getPotion()
let armor = this.getArmor()
let weapon = this.getWeapon()
inventory.push(potions, armor, weapon)
}

//potion get
//need to think/work out how potions work
getPotion(){
let potion = []
let heal = 50
}
//weaponStat
getWeapon(){
let weapon =[]
let iLvl = this.rarity()
let str = (itemStat(iLvl) * level)
let dex = itemStat(iLvl) * level
weapon.push(iLvl, str, dex)
}
//armorStat
//need to work on the equation for armor/ how def will take into consideration when fighting
getArmor(){

}

//random rarity
rarity(){
  let rarityOptions = ['Common', 'Rare', 'Epic', 'Legendary']
  let randomRarity = rarityOptions[Math.floor(math.random() * rarityOptions.length)]
  return randomRarity;
}

itemStat(rarity){
  if (rarity == 'Common'){
    return 4
  } else if (rarity == 'Rare'){
    return 5.5
  } else if (rarity == 'Epic'){
    return 7
  } else if (rarity == 'Legendary'){
    return 10
  }
}

//item selling??




//Equiment/items
/* 
For now this logic will only apply to equiment as the only other items that can be acquired
is monster loot
-Four rarity types: common/rare/epic/legendary
Rates may change
-Common 65%
-Rare 20%
-Epic 10%
-Legendary 5%
stats will currently be randomly rolled and then afterwards the rarity will affect the item
Luk will a small chance of appearing on epic/legendary gear
*/
weaponRarity(){
let rarity = Math.floor(Math.random()*100)
if (rarity >= 0 && rarity <= 65){
  //common
  let weapon = [];
  if(job == warrior){
    let iLvl = "common"
  let str = 4 * level
  let dex = Math.floor(1.5 * level)
  weapon.push(iLvl, str, dex)
  } else {
    let iLvl = "common"
    let str =  Math.floor(1.5 * level)
    let dex = 4 * level 
    weapon.push(iLvl, str, dex)
  }
} else if (rarity >= 66 && rarity <= 85){
  //rare
  let weapon = [];
  if(job == warrior){
    let iLvl = "Rare"
  let str = 5.5 * level
  let dex = Math.floor(2.5 * level)
  weapon.push(iLvl, str, dex)
  } else {
    let iLvl = "Rare"
    let str =  Math.floor(2.5 * level)
    let dex = 5.5 * level 
    weapon.push(iLvl, str, dex)
  }
}else if (rarity >= 86 && rarity <= 94){
  //epic
  let weapon = [];
  if(job == warrior){
    let iLvl = "Epic"
  let str = 7 * level
  let dex = Math.floor(4 * level)
  weapon.push(iLvl, str, dex)
  } else {
    let iLvl = "Epic"
    let str =  Math.floor(4 * level)
    let dex = 7 * level 
    weapon.push(iLvl, str, dex)
  }
} else if (rarity >= 95){
  //legendary
  let weapon = [];
  if(job == warrior){
    let iLvl = "Legendary"
  let str = 10 * level
  let dex = Math.floor(6 * level)
  let luk = Math.ceil(Math.random()*10)
  weapon.push(iLvl, str, dex, luk)
  } else {
    let iLvl = "Legendary"
    let str =  Math.floor(6 * level)
    let dex = 10 * level
    let luk = Math.ceil(Math.random()*10)
    weapon.push(iLvl, str, dex, luk)
  }
}