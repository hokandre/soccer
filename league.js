const Club = require('./club.js')

class League{
    constructor(country, ceo, clubs){
        this.country = country
        this._ceo = ceo
        this._clubs = clubs || []
    }

    get ceo(){
        return this._ceo
    }
    set ceo(who){
        this._ceo = who
    }

    get clubs (){
        return this._clubs
    }
    set clubs (clubs){
        this._clubs = clubs
    }


    addClub (club){
        this.clubs.push(club)
    }
    members (){
        let clubs = this.clubs
        let count = 1 
        for(let club of clubs){
            console.log(`${count}. Nama Club : ${club.name} | Stadium : ${club.stadium}`)
            count++
        }
    }
}



module.exports = League