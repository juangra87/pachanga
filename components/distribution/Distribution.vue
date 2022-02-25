<template>
  <div>
    <div class="content_title">
      <h1>{{ $t('distribution.title') }}</h1>
    </div>
    <div class="content_expand">
      <ToolBar></ToolBar>
      <LineUp :teams="teams"></LineUp>
    </div>
  </div>
</template>

<script>
import ToolBar from "@/components/distribution/ToolBar";
import LineUp from "@/components/distribution/LineUp";
export default {
  name: "Distribution",
  components: {LineUp, ToolBar},
  computed: {
    teams(){
      return this.$store.state.distribution.teams
    }
  }
}
</script>

<style scoped>

</style>
