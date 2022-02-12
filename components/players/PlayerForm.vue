<template>
  <div class="inner_content form_creation">
    <input v-model="name" v-bind:placeholder="$t('player.newPlayerPlaceHolder')" type="text"/>
    <div class="criterias_insertion" v-for="criteria in criterias" :key="criteria.id">
      <p>{{ criteria.name }}</p>
    </div>
    <img class="icon_as_button" :src="'icons/add.ico'" @click="add"/>
  </div>
</template>

<script>

export default {
  name: "PlayerForm",
  data() {
    return {name: '', playerCriteriaValues: []}
  },
  computed: {
    players() {
      return this.$store.state.players.list
    },
    criterias() {
      return this.$store.state.criteria.list
    }
  },
  methods: {
    add() {
      if (this.name === '') {
        this.errorMessage = 'player.errorMessage.emptyName'
      }else{
        this.$store.commit('player/add', {"name": this.name, playerCriteriaValues})
        this.errorMessage = ''
        this.name = ''
      }
    },
  },
}
</script>

<style scoped>

</style>
