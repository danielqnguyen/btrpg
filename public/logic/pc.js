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

// Options Page
/*
-Explore Button: 5/10 times will encounter a mob, 1/10 will encounter an npc/merchant(rare),
2/10 to encouter nothing, 1/10 times to randomly obtain item/money, 1/10 of being robbed
-Rest Button: self explanatory, will recover 10% of hp/mp(if skills/magic are incorporated)
1/10 chance to meet npc/merchant
-Status: checks current status and equipped items
-Inventory: Will show all the loot obtained and gold
-DataBook: not sure if this will be used but will most likely contain monster info/loot
and other miscellaneous info
-Each button instead of sending to a new page will just display a modal
*/

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
-Feel Dice: level difference will affect chances of fleeing, chance of dropping gold on 
successful feeling
-Potions/Items: Potions will recover 10-25% of hp, potential chance of adding in other
items to help will battling
 */

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
