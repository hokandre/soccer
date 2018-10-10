const Club = require('./club.js')

class Barca extends Club{
    constructor(){
        super()
        this.name =  'F.C. Barcelona'
        this.stadium =  'Camp Nou'
        this.location =  'Barcelona'
        this.manager =  'Ernesto Valverde'
        this.budgetTransfer =  20000000
    }
}
module.exports = Barca