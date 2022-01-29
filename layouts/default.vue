<template>
  <div class="background_mid">
    <Nuxt/>
  </div>
</template>

<script>
export default {
  head() {
    return this.$nuxtI18nHead()
  },
}
</script>

<style>
body {
  margin: 0;
}

.background_mid {
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100%;
  min-width: 100%;
  background: gray;
  margin: 0;
}

.div_component {
  background: white;
  overflow: hidden;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0 10px 0;
}
</style>
