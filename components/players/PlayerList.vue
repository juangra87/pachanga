<template>
  <div class="content_list">
    <div class="inner_content">
      <table v-if="players.length > 0">
        <tr>
          <td>{{ $t('player.title') }}</td>
          <td v-for="criteria in criterias" :key="criteria.id">{{ criteria.name }}</td>
        </tr>
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.name }}</td>
          <td v-for="criteria in criterias" :key="criteria.id">
            <StarRating :stars="5" :value="player.criteriaValues[criteria.id]" :criteria-id="criteria.id" :player-id="player.id"
                        @update-value="updateCriteriaValue"/>
          </td>
          <td><img class="icon_as_button push_right" :src="'icons/remove.ico'" @click="remove(player.id)"/></td>
        </tr>
      </table>
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
table{
  flex-grow: 1;
}

</style>
