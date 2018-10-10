const Club = require('./club.js')
class Arsenal extends Club{
    constructor(){
        super()
        this.name = 'Arsenal F.C.'
        this.stadium = 'Emirates Stadium'
        this.location = 'London'
        this.manager = 'Arsène Wenger'
        this.budgetTransfer = 35000000
    }
}
module.exports = Arsenal