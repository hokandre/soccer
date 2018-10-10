
class Club {
    constructor(name, stadium, location, manager, budgetTransfer,players){
        this.name = name
        this.stadium = stadium
        this.location = location
        this.manager = manager
        this.budgetTransfer = budgetTransfer
        this.players = players || []
    }
    addPlayer(players){
        players.currentClub = this.name
        this.players.push(players)
    }

    buyPlayer (player, club){
        if(club === null){
            if(this.budgetTransfer >= player.transferFee){
                let players = this.players
                player.currentClub = this.name
                players.push(player)
                this.budgetTransfer -= player.transferFee
                console.log(`You buy [${player.playerName}] with transfer fee $[${player.transferFee}], remaining budget: $[${this.budgetTransfer}]`)
            }else{
                console.log(`Budget not sufficient to buy [${player.playerName}]. Your club need extra money for $[${player.transferFee - this.budgetTransfer}] to buy this player`)
            }
        }else{
            let currentClubPlayer = player.currentClub
            let clubName = club.name
            if(currentClubPlayer === clubName) {
                if(this.budgetTransfer >= player.transferFee){
                    let players = this.players
                    player.currentClub = this.name
                    players.push(player)
                    this.budgetTransfer -= player.transferFee

                    for(let i = 0; i < club.players.length; i++){
                        if(club.players[i].playerName === player.playerName){
                            club.players.splice(i,1)
                            break
                        }
                    }
                    
                    console.log(`You buy [${player.playerName}] with transfer fee $[${player.transferFee}], remaining budget: $[${this.budgetTransfer}]`)
                }else{
                    console.log(`Budget not sufficient to buy [${player.playerName}]. Your club need extra money for $[${player.transferFee - this.budgetTransfer}] to buy this player`)
                }
            }else{
               console.log(`There is no Player with name [${player.playerName}] in [${club.name}] F.C.`)
            }
        }
    }
}

// let ronaldo = new Player('ronaldo',170, 'striker','spanyol',10000)
// let madrid = new Club('Madrid','Ohama','spanyol','etito',1000000)
//madrid.addPlayer(ronaldo)
//console.log(madrid)
//console.log(ronaldo.currentClub)

module.exports = Club

//relasi :
//1 club bisa memiliki banyak players 
//1 player hanya bisa memiliki 1 club

//club dan player berhubungan aggregation