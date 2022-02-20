<template>
  <div class="content_list">
    <div class="inner_content">
      <table>
        <tr>
          <td>{{ $t('player.title') }}</td>
          <td v-for="criteria in criterias" :key="criteria.id">{{ criteria.name }}</td>
        </tr>
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.name }}</td>
          <td v-for="criteria in criterias" :key="criteria.id">{{ player.criteriaValues[criteria.id] }}</td>
          <td><img class="icon_as_button push_right" :src="'icons/remove.ico'" @click="remove(player.id)"/></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerList",
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
  },
}
</script>

<style scoped>
table{
  flex-grow: 1;
}

</style>
