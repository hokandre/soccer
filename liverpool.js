const Club = require('./club.js')
class Liverpool extends Club{
    constructor(){
        super()
        this.name = 'Liverpool F.C.'
        this.stadium = 'Anfield'
        this.location = 'Liverpool'
        this.manager = 'Jürgen Klopp'
        this.budgetTransfer = 50000000
    }
}
module.exports = Liverpool