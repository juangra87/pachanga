export const state = () => ({
  list: [] =[
    {name:"Habilidad",id:"0"},
    {name:"Forma física",id:"1"}
  ],
  nextId: 2,
  criteriaValues:[] = [0,1,2,3,4,5]
})

export const mutations = {
  add(state, criteria) {
    criteria.id = state.nextId
    state.list.push(criteria)
    state.nextId++
    console.log("New criteria created: "+criteria)
  },
  remove(state, id) {
    var index = state.list.map(x => {
      return x.id;
    }).indexOf(id);
    state.list.splice(index,1)
    console.log("Criteria removed: "+ id)
  }
}

export const getters = {
  getAll(state){ return state.list},
  getAllCriteriaValues(state){return state.criteriaValues}
}
