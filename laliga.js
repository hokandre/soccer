const League = require('./league.js')
class Laliga extends League{
    constructor(){
        super()
        this.country = 'Spain'
        this.ceo = 'Javier Gomez'
    }
}
module.exports = Laliga