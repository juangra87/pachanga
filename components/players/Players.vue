<template>
  <div>
    <div class="content_title">
      <h1>{{ $t('player.title') }}</h1>
    </div>
    <div class="content_expand form_creation">
      <PlayerForm/>
      <PlayerList/>
    </div>
  </div>
</template>

<script>
import PlayerForm from "@/components/players/PlayerForm";
import PlayerList from "@/components/players/PlayerList";

export default {
  name: "Players",
  components: {PlayerForm,PlayerList},
}
</script>

<style scoped>

</style>
