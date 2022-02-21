<template>
  <div>
      <img v-for="star in this.stars" :key="star":src="srcStar(star)" @click="updateRating(star)">
  </div>
</template>

<script>
export default {
  props: {
    stars: Number,
    value: Number,
    criteriaId: String,
    playerId: String
  },
  data() {
    return {
      rating: this.value
    }
  },
  methods: {
    updateRating(star) {
      this.rating = star
      let eventPayload = {"value":star, "criteriaId": this.criteriaId, "playerId": this.playerId}
      this.$emit('update-value', eventPayload)
    },
    srcStar(star) {
      return star <= this.rating ? "icons/stars/star_full.svg":"icons/stars/star_empty_black.svg"
    },
  },
  computed: {

  }
}
</script>

<style scoped>
img{
  width: 1.5rem;
  margin: 0.15rem;

}

</style>
