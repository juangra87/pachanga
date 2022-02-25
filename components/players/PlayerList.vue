<template>
  <div v-if="players.length > 0"  class="content_list">
    <div v-for="player in players" :key="player.id" class="inner_content">
      <h3>{{ player.name }}</h3>
      <div v-for="criteria in criterias" :key="criteria.id">{{ criteria.name }}
        <StarRating :stars="5" :value="player.criteriaValues[criteria.id]" :criteria-id="criteria.id" :player-id="player.id"
                    @update-value="updateCriteriaValue"/>
      </div>
      <img class="icon_as_button push_right" :src="'icons/remove.ico'" @click="remove(player.id)"/>
    </div>
  </div>
</template>

<script>
import StarRating from "@/components/rating/StarRating";

export default {
  name: "PlayerList",
  components:{
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
    updateCriteriaValue(object){

    }
  },
}
</script>

<style scoped>

</style>
