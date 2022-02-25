<template>
<div class="lineup_grid">
  <div class="lineup_team" v-for="(team, index) in this.teams" >
    {{ $t("distribution.team") }} {{index +1}}
    <ul v-for="(player, index) in team">
      <li>{{index+1 }} - {{player}}</li>
    </ul>
  </div>

</div>
</template>

<script>
export default {
  name: "LineUp",
  props:{
    teams: []
  }
}
</script>

<style scoped>
.lineup_grid{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.lineup_team{
padding: 2rem;
}

</style>
