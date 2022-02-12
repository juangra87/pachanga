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
}

.content {
  background: white;
  overflow: visible;
  border-radius: 5px;
  margin: 0.5rem;
  box-shadow: 5px 5px 4px #888888;
}

.content_title{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  background: #333333;
  margin-bottom: 1rem;
  color: #62d562;
}

.content_expand{
  padding: 0.7rem;
}

input, select {
  padding: 0.5rem;
  font-size: 1.1rem;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 2px #888888;
}

.icon_as_button {
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

}

.inner_content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
}

.elements_list {
  display: flex;
  justify-content: space-between;
}

.push_right {
  margin-left: auto;
  margin-right: 0.5vw;
}
</style>
