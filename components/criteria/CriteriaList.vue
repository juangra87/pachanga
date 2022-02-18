<template>
  <div class="content_list">
    <div  class="inner_content" v-for="criteria in criterias" :key="criteria.id">
      <p>{{criteria.name}}</p>
      <img class="icon_as_button push_right" :src="'icons/remove.ico'" @click="remove(criteria.id)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CriteriaList",
  computed: {
    criterias(){
      return this.$store.state.criteria.list
    }
  },
  methods:{
    remove(id){
      this.$store.commit('criteria/remove', id)
    },
  },
}
</script>

<style scoped>

</style>
