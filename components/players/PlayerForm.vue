<template>
  <div>
    <div class="inner_content">
      <textarea class="player_textArea"
                rows="10"
                v-model="list"
                v-bind:placeholder="$t('player.listOfPlayerPlaceHolder')"
      />
    </div>
    <div class="inner_content">
      <button class="add_button" @click="add">{{ $t('player.addButton.list') }}</button>
    </div>
    <hr>
  </div>

</template>

<script>
import StarRating from "@/components/rating/StarRating";
export default {
  name: "PlayerForm",
  components:{
    StarRating
  },
  data() {
    return {list: '', playerCriteriaValues: {}}
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
      if (this.list === '') {
        this.errorMessage = 'player.errorMessage.emptyName'
      } else {
        //TODO move store logic to Vuex Actions
        this.$store.commit('players/removeAll')
        this.parseListOfPlayers(this.list).forEach(
          player => {
            this.$store.commit('players/add', {"name": player, "criteriaValues":Object.assign({}, this.playerCriteriaValues)})
          })
        this.errorMessage = ''
      }
    },
    setCriteriaValue(object){
      this.playerCriteriaValues[object.criteriaId]=object.value
    },
    parseListOfPlayers(textArea){
      return textArea.split('\n')
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

.player_textArea {
  width: 100%;
}
</style>
