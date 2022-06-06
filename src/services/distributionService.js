import {DistributionCriteria} from "~/store/distribution";

export function applyDistribution(listOfPlayers, numberOfTeams, distributionCriteriaId) {
  console.debug("Distribution:"+ distributionCriteriaId + "Teams:"+ numberOfTeams + "Players:"+ JSON.stringify(listOfPlayers))
  let teams

  if(distributionCriteriaId == DistributionCriteria.RANDOM.id){
    console.log("applying RANDOM")
    teams = randomDistribution(listOfPlayers, numberOfTeams)
  }else if (distributionCriteriaId == DistributionCriteria.OPTIMIZE.id){
    console.log("applying OPTIMIZE")
    teams = optimizeDistribution(listOfPlayers, numberOfTeams)
  }else {

  }

  console.log(JSON.stringify(teams))
  return teams
}

function optimizeDistribution(players, numberOfTeams){
  return randomDistribution(players,numberOfTeams)
}

function randomDistribution(players, numberOfTeams) {
  let playersPerTeam = initializeTeamsCounters(players.length,numberOfTeams)
  let teams = Array(numberOfTeams).fill({})

  const teamAndPlayerArray = players.map(p => {
    return {
      "team": getNewRandomTeam(playersPerTeam),
      "player": p.name
    }
  })

  teams.forEach((team, index) => {
    teams[index] = teamAndPlayerArray.filter(obj => {
      return obj.team == index
    }).map(obj => obj.player)
  })

  return teams
}

function getNewRandomTeam(teams) {
  let candidateTeam
  do {
    candidateTeam = Math.floor(Math.random() * teams.length)
  } while (teams[candidateTeam] == 0)
  teams[candidateTeam] -= 1
  return candidateTeam
}

function initializeTeamsCounters(numberOfPlayers, numberOfTeams){
  const playersPerTeam = Math.ceil(numberOfPlayers / numberOfTeams)
  console.log(playersPerTeam)
  return Array(numberOfTeams).fill(playersPerTeam)
}
