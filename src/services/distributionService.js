export function applyDistribution(listOfPlayers, numberOfTeams, distributionType) {

  const teams = randomDistribution(listOfPlayers, numberOfTeams)

  return teams
}

function randomDistribution(players, numberOfTeams) {
  const playersPerTeam = Math.ceil(players.length / numberOfTeams)
  let teams = Array(numberOfTeams).fill(playersPerTeam)
  console.log(JSON.stringify(teams))

  const teamAndPlayerArray = players.map(p => {
    return {
      "team": getNewRandomTeam(teams),
      "player": p.name
    }
  })

  teams.forEach((team, index) => {
    teams[index] = teamAndPlayerArray.filter(obj => {
      return obj.team == index
    }).map(obj => obj.player)
  })

  console.log(JSON.stringify(teams))
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
