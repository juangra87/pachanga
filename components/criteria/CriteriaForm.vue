<template>
  <div>
    <div class="inner_content">
      <input class="" v-model="name" v-bind:placeholder="$t('criteria.newCriteriaPlaceHolder')"
             type="text" required pattern="[a-z]"
             v-on:keyup.enter="add"/>
    </div>
    <div class="inner_content">
      <button class="add_button" @click="add">{{ $t('criteria.addButton') }}</button>
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
      errorMessage: ""
    }
  },
  methods: {
    add() {
      if (this.name === '') {
        this.errorMessage = 'criteria.errorMessage.emptyName'
      } else {
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
