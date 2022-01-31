export const state = () => ({
  list: [],
  nextId: 0
})

export const mutations = {
  add(state, player) {
    player.id = state.nextId
    state.list.push(player)
    state.nextId++
    console.log("New player created: "+player)
  },
  remove(state, id) {
    var index = state.list.map(x => {
      return x.id;
    }).indexOf(id);
    state.list.splice(index,1)
    console.log("Player removed: "+ id)
  }
}

export const getters = {
  getAll(state){ return state.list}
}
