<template>
  <div>
    <h1>{{ $t('criteria.title') }}</h1>
    <input v-model="criteriaName" v-bind:placeholder="$t('criteria.newCriteriaPlaceHolder')" type="text"/>
    <button @click="add">{{ $t('criteria.newButton') }}</button>
    <ul>
      <li v-for="criteria in criterias" :key="criteria.id">
        <p>{{criteria.name}}</p>
        <button @click="remove(criteria.id)">{{ $t('criteria.removeButton') }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mutations} from 'vuex'

export default {
  name: "CriteriaSelector",
  data(){
      return {criteriaName:''}
  },
  computed: {
    criterias(){
      return this.$store.state.criteria.list
    }
  },
  methods:{
    add(){
      this.$store.commit('criteria/add', {"name":this.criteriaName})
    },
    remove(id){
      this.$store.commit('criteria/remove', id)
    },
  },
}
</script>

<style scoped>

</style>
