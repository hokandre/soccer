const Club = require('./club.js')

class RealMadrid extends Club{
    constructor(){
        super()
        this.name = 'Real Madrid F.C.'
        this.stadium = 'Santiago Bernabéu'
        this.location = 'Madrid'
        this.manager = 'Zinedine Zidane'
        this.budgetTransfer = 10000000000
    }
    
}
module.exports = RealMadrid