<template>
  <ul class="inner_content">
    <li v-for="player in players" :key="player.id">
      <p>{{player.name}}</p>
      <button @click="remove(player.id)">{{ $t('player.removeButton') }}</button>
      <p v-for="criteria in criterias" :key="criteria.id">
        {{criteria.name}} - {{player.get[criteria.name]}}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PlayerList",
  computed: {
    players(){
      return this.$store.state.players.list
    },
    criterias() {
      return this.$store.state.criteria.list
    }
  },
  methods:{
    remove(id){
      this.$store.commit('players/remove', id)
    },
  },
}
</script>

<style scoped>

</style>
