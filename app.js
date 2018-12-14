const Block = require('./classes/block');
const Blockchain = require('./classes/blockchain');

// Create new Blockchain.
let newBlockchain = new Blockchain();

// Add 2 new blocks to the chain.
newBlockchain.addBlock( new Block("12/14/2018", {amount: 2}) );
newBlockchain.addBlock( new Block("12/15/2018", {amount: 4}) );

console.log(JSON.stringify(newBlockchain, null, 4));
console.log("Is blockchain valid? " + newBlockchain.checkValid());