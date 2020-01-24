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
