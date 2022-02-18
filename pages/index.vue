<template>
  <div>
    <Criterias class="content"/>
    <Players class="content"/>
    <Distribution class="content"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Criterias from "@/components/criteria/Criterias";
import Players from "@/components/players/Players";
import Distribution from "@/components/distribution/distribution";

export default Vue.extend({

  components: {Distribution, Criterias, Players},
})
</script>
<style>

</style>
