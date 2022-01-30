<template>
  <div class="container">
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
html, body {
  margin: 0;
  font-family: Arial, sans-serif;
  height: 100%;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  min-width: 100%;
  background: #cccccc;
  margin: 0;
}

.content {
  background: white;
  overflow: hidden;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}

.content h1 {
  align-content: center;
}
</style>
