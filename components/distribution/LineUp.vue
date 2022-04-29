<template>
  <div class="lineup_grid">
    <div class="lineup_team" v-for="(team, index) in this.teams">
      <h2>{{ $t("distribution.team") }} {{(index + 1)}}</h2>
      <div class="lineup_player" v-for="(player) in team">
        {{ player }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "LineUp",
  props: {
    teams: []
  }
}
</script>

<style scoped>
.lineup_grid {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.lineup_team {
  padding: 2rem;
  font-weight: bold;
}

.lineup_player {
  padding: 5px;
  font-weight: bold;
}

</style>
