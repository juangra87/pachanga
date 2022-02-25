
const DistributionCriteria = {
  RANDOM : {id: "100", name: "random"},
  OPTIMIZE : {id: "101", name: "optimize"}
}
export const state = () => ({
  teams: [] = [["pepe","paco"],["antonio", "luis"]],
  distributionCriteriaList: [],
  distributionCriteria: DistributionCriteria.RANDOM
})

export const mutations = {
  addDistribution(state, teams, distributionCriteria) {
    state.list= teams
    state.distributionCriteria = distributionCriteria
  },

  addDistributionCriteria(state, distributionCriteria) {
    state.distributionCriteria = distributionCriteria
  },
}

export const getters = {
  getTeams(state){ return state.teams},

  getDistributionCriteriaList(state){
    return state.distributionCriteriaList
  },

  getDistributionCriteria(state){
    return state.distributionCriteria
  }
}
