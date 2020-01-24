# hearthstone-cards
A module to fetch hearthstone card information using the HearthstoneJSON API.

## Usage
`hearthstone(filters, collectible = true)`

Returns a Promise of an array of objects.

`filters` - Filters that specify which cards to find. For example, `hearthstone({ "cost": 10 })` will produce an array of all collectible cards that cost 10 mana. For more information, click [here](https://hearthstonejson.com/).

`collectible` - An optional argument that determines whether or not the card is a collectible. An example of a non-collectible card is [Essence of the Red](http://hearthstone.gamepedia.com/Essence_of_the_Red_(Normal)), a hero power used by [Vaelastrasz the Corrupt](http://hearthstone.gamepedia.com/Vaelastrasz_the_Corrupt) in the Blackrock Mountain expansion.

## Examples
This is an example of fetching all cards with the given filters:
- Costs 6 mana crystals
- Belongs to the Journey to Un'Goro expansion
- Legendary rarity
```js
const hearthstone = require('./hearthstone.js');

hearthstone({
    'cost': 5,
    'set': 'UNGORO',
    'rarity': 'LEGENDARY'
}).then(cards => {
    for (const card of cards) {
        console.log(`${ card.name } [ATK ${ card.attack } HP ${ card.health }]\n${ card.text }`);
    }
}).catch(console.error);
```
The above code will produce this: 
```
Elise the Trailblazer [ATK 5 HP 5]
<b>Battlecry:</b> Shuffle a sealed <b>Un'Goro</b> pack into your deck.
Lyra the Sunshard [ATK 3 HP 5]
Whenever you cast a spell, add a random Priest spell to your hand.
```
