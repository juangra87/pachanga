<template>
  <div>
    <div class="content_title">
      <h1>{{ $t('criteria.title') }}</h1>
    </div>
    <div class="content_expand">
      <div class="inner_content form_creation">
        <input class="input_text" v-model="criteriaName" v-bind:placeholder="$t('criteria.newCriteriaPlaceHolder')" type="text"/>
        <img class="icon_as_button" :src="'icons/add.ico'" @click="add" />
      </div>
      <ul class="content_list">
        <li  class="inner_content elements_list"v-for="criteria in criterias" :key="criteria.id">
          <p>{{criteria.name}}</p>
          <img class="icon_as_button" :src="'icons/remove.ico'" @click="remove(criteria.id)" />
        </li>
      </ul>
    </div>

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
.elements_list{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
</style>
