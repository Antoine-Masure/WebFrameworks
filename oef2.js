//NPM module => gewoon de naam opgeven
const _ = require("lodash")
//eigen module in het project => relatief path gebruiken !
const helper = require('./helper.js');

console.log(helper.welkomTekstje);

console.log (`random getal: ${_.random(1, 200)} `);

console.log(`som uit helper module: ${helper.som(5, 34)}`);

