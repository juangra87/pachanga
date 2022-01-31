<template>
  <div>
    <div class="content_title">
      <h1>{{ $t('player.title') }}</h1>
    </div>
    <div class="content_expand form_creation">
      <div class="inner_content form_creation">
      <input v-model="playerName" v-bind:placeholder="$t('player.newPlayerPlaceHolder')" type="text"/>
      <div class="criterias_insertion" v-for="criteria in criterias" :key="criteria.id">
        <select v-bind:placeholder="criteria.name">
          <option :value="playerCriteriaValues[criteria.name]" >{{criteria.name}}</option>
        </select>
      </div>
      <img class="icon_as_button" :src="'icons/add.ico'" @click="add" />
      </div>
    <ul class="inner_content">
      <li v-for="player in players" :key="player.id">
        <p>{{player.name}}</p>
        <button @click="remove(player.id)">{{ $t('player.removeButton') }}</button>
        <p v-for="criteria in criterias" :key="criteria.id">
          {{criteria.name}} - {{player.get[criteria.name]}}
        </p>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Players",
  data(){
    return {
      playerName:'',
      playerCriteriaValues:{}}
  },
  computed: {
    players(){
      return this.$store.state.players.list
    },
    criterias() {
      return this.$store.state.criteria.list
    }
  },
  methods:{
    add(){
      let player = {"name" : this.playerName}
      this.criterias.forEach ( criteria => {
        player[criteria.name]= this.playerCriteriaValues[criteria.name]
      })
      this.$store.commit('players/add', player )
    },
    remove(id){
      this.$store.commit('players/remove', id)
    },
  },
}
</script>

<style scoped>

</style>
