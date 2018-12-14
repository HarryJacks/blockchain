const SHA256 = require('crypto-js/sha256');

class Block {

    constructor(time, data) { // Parameters: ( "time", "{data}" )
        this.index = 0;
        this.time = time;
        this.data = data;
        this.prevHash = "0";
        this.hash = this.generateHash();
        this.nonce = 0;
    }

    generateHash() {
        return SHA256(this.index + this.prevHash + this.time + this.data + this.nonce).toString();
    }

}

module.exports = Block;