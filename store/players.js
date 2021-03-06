export const state = () => ({
  list: [],
  nextId: 0
})

export const mutations = {
  add(state, player) {
    player.id = state.nextId
    state.list.push(player)
    state.nextId++
    console.debug("New player created: " + JSON.stringify(player))
  },
  remove(state, id) {
    var index = state.list.map(x => {
      return x.id;
    }).indexOf(id);
    state.list.splice(index, 1)
    console.debug("Player removed: " + id)
  },
  removeAll(state) {
    state.list = []
    state.nextId = 0
    console.debug("All players have been removed: ")
  },
  updateCriteriaValue(state, object) {
    var index = state.list.map(x => {
      return x.id;
    }).indexOf(object.playerId);
    state.list[index].criteriaValues[object.criteriaId]=object.value
    console.debug("Player updated: " + JSON.stringify(state.list[index]))
  }
}

export const getters = {
  getAll(state) {
    return state.list
  }
}
