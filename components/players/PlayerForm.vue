<template>
  <div>
    <div class="inner_content">
      <input v-model="name" v-bind:placeholder="$t('player.newPlayerPlaceHolder')" type="text" v-on:keyup.enter="add"/>
    </div>
    <div class="inner_content">
      <div class="criterias_insertion" v-for="criteria in criterias" :key="criteria.id">
        <label>{{ criteria.name }}</label>
        <select @change="setCriteriaValue($event, criteria.id)">
          <option>{{ criteria.name }}</option>
          <option v-model="playerCriteriaValues[criteria.name]" v-for="criteriaValues in criteriaValues" :key="criteriaValues" :value="criteriaValues">
            {{ criteriaValues }}
          </option>
        </select>
      </div>
    </div>
    <div class="inner_content">
      <button class="add_button" @click="add">{{ $t('player.addButton') }}</button>
    </div>
    <hr>
  </div>

</template>

<script>

export default {
  name: "PlayerForm",
  data() {
    return {name: '', playerCriteriaValues: {}}
  },
  computed: {
    players() {
      return this.$store.state.players.list
    },
    criterias() {
      return this.$store.state.criteria.list
    },
    criteriaValues() {
      return this.$store.state.criteria.criteriaValues
    }
  },
  methods: {
    add() {
      if (this.name === '') {
        this.errorMessage = 'player.errorMessage.emptyName'
      } else {
        this.$store.commit('players/add', {"name": this.name, "criteriaValues":this.playerCriteriaValues})
        this.errorMessage = ''
        this.name = ''
      }
    },
    setCriteriaValue(event, criteriaName){
      this.playerCriteriaValues[criteriaName]=event.target.value
    }
  },
}
</script>

<style scoped>
.inner_content{
  padding-top: 1rem;
}
label{
  margin-top: 1rem;
}
.criterias_insertion{
flex-grow: 1;
}
</style>
