const League = require('./league.js')
class PremierLeague extends League{
    constructor(){
        super()
        this.country = 'United Kingdom'
        this.ceo = 'Richard Scudamore'
    }
}
module.exports = PremierLeague