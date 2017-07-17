const hearthstone = require("./hearthstone.js");

hearthstone({
    "cost": 6,
    "set": "UNGORO",
    "rarity": "LEGENDARY"
}).then(cards => {
    cards.forEach(card => {
        console.log(`${card.name} - ${card.text.replace(/\n/g, " ")} [ATK ${card.attack} HP ${card.health}]`);
    });
}).catch(console.error);
