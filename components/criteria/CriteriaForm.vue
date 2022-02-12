<template>
  <div>
  <div class="inner_content form_creation">
    <input class="input_text" v-model="name" v-bind:placeholder="$t('criteria.newCriteriaPlaceHolder')"
           type="text" required pattern="[a-z]"/>
    <img class="icon_as_button push_right" :src="'icons/add.ico'" @click="add"/>
  </div>
    <hr>
  </div>
</template>

<script>

export default {
  name: "CriteriaForm",
  data() {
    return {
      name: "",
      errorMessage:""}
  },
  methods: {
    add() {
      if (this.name === '') {
        this.errorMessage = 'criteria.errorMessage.emptyName'
      }else{
        this.$store.commit('criteria/add', {"name": this.name})
        this.errorMessage = ""
        this.name = ""
      }
    },
  },
}
</script>

<style scoped>
</style>
