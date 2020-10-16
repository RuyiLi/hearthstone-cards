const fetch = require('node-fetch');

let cards;

module.exports = async function (filters) {
    if (typeof cards === 'undefined')
        cards = await fetch(`https://api.hearthstonejson.com/v1/20022/enUS/cards${ filters.collectible ? '.collectible' : '' }.json`).then(res => res.json());

    return cards.filter((card) =>
        Object.entries(filters).every(([ filter, value ]) => card[filter] === value)
    );
}
