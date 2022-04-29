<template>
<div class="toolbar">
  <select>
    <option value="random">{{ $t('distribution.button.random') }}</option>
    <option v-for="criteria in criterias" :key="criteria.id" :value="criteria.id">
      {{ criteria.name }}
    </option>
    <option >{{ $t('distribution.button.optimized') }}</option>
  </select>
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
