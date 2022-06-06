<template>
  <div v-if="players.length > 0" class="content_list">
    <div v-for="player in players" :key="player.id" class="inner_content">
      <div class="playerList__playerTitle">
        <h3 class="playerList__playerName">{{ player.name }}</h3>
        <img class="icon_as_button push_right" :src="'icons/remove.ico'" @click="remove(player.id)"/>
      </div>
      <div class="playerList__criteriaValues" v-for="criteria in criterias" :key="criteria.id">
        {{ criteria.name }}
        <StarRating :stars="5" :value="player.criteriaValues[criteria.id]" :criteria-id="criteria.id"
                    :player-id="player.id"
                    @update-value="updateCriteriaValue"/>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "@/components/rating/StarRating";

export default {
  name: "PlayerList",
  components: {
    StarRating
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
    remove(id) {
      this.$store.commit('players/remove', id)
    },
    updateCriteriaValue(object) {
      console.debug(JSON.stringify(object))
      this.$store.commit('players/updateCriteriaValue', object)
    }
  },
}
</script>

<style scoped>
.playerList__playerTitle{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.playerList__playerName{
  width: 90%;
  font-size:1.2rem;
}
.inner_content{
  margin-top: 20px;
}

.playerList__criteriaValues {
  padding: 0 2vw 0 2vw;
}

@media (max-width: 720px){
  .playerList__criteriaValues {
    width: 40vw;
  }
}


</style>
