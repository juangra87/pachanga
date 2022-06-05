import {applyDistribution} from "@/src/services/distributionService";
const DistributionCriteria = {
  RANDOM : {id: "100", name: "random"},
  OPTIMIZE : {id: "101", name: "optimize"}
}
export const state = () => ({
  teams: [] ,
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
  applyDistribution(state, payload){
    console.log("Payload"+ payload.players)
    console.log("Payload"+ payload.distributionCriteria)
    state.teams = applyDistribution(payload.players, 2 , payload.distributionCriteria )
  }
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
