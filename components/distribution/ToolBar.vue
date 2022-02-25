<template>
<div class="toolbar">
  <button class="distribution_button random_button">{{ $t('distribution.button.random') }}</button>
  <div v-for="criteria in criterias" :key="criteria.id">
    <button class="distribution_button">{{ criteria.name }}</button>
  </div>
  <button class="distribution_button optimized_button">{{ $t('distribution.button.optimized') }}</button>
</div>
</template>

<script>
export default {
  name: "ToolBar",
  computed: {
    criterias() {
      return this.$store.state.criteria.list
    }
  }
}
</script>

<style scoped>
.toolbar{
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: center;
}


.distribution_button {
  padding: 1rem;
  font-size: 1.1rem;
  margin: 10px 2px 10px 0;
  background-color: #62d562;
  cursor: pointer;
}

.distribution_button:hover {

  background-color: #333333;
  color: white;
}

.random_button{
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}
.optimized_button{
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

</style>
