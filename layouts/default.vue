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
  font-size: 1.15rem;
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
  overflow: visible;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  box-shadow: 5px 5px 4px #888888;
}

.content h1 {
  align-content: center;
}

input, select {
  padding: 5px;
  font-size: 1.2rem;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 2px #888888;
}

.icon_as_button {
  width: 40px;
  height: 40px;
  cursor: pointer;

}

.inner_content {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>
