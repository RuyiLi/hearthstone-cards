const snekfetch = require("snekfetch");

module.exports = async function(filters, collectible = true){
    //const { id, name, attack, health, cardClass, collectible, cost, elite, faction, mechanics, rarity, type } = filters
    try{
        const res = await snekfetch.get(`https://api.hearthstonejson.com/v1/20022/enUS/cards${collectible ? '.collectible' : ''}.json`);
        const data = JSON.parse(res.text);
        let cards = [];

        for(let i = 0; i < data.length; i++){
            const card = data[i];
            let match = true;

            for(let j = 0; j < Object.keys(filters).length; j++){
                let filter = Object.keys(filters)[j];
                if(filter){
                    if(card[filter] !== filters[filter]) match = false;
                }else{
                    match = false;
                }
            }
            if(match) cards.push(data[i]);
        }

        if(cards.length > 0) return cards;
        else throw new Error("Could not find a card with the specified filters!");
    } catch(err) {
        throw err;
    }
}
