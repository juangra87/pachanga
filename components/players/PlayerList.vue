<template>
  <div class="content_list">
    <div class="inner_content" v-for="player in players" :key="player.id">
      <p>{{player.name}}</p>
      <p v-for="criteria in criterias" :key="criteria.id">
        {{criteria.name}} - {{player.criteriaValues[criteria.name]}}
      </p>
      <img class="icon_as_button push_right" :src="'icons/remove.ico'" @click="remove(criteria.id)" />
    </div>
  </div>
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
