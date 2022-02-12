<template>
  <div>
    <Criterias class="content"/>
    <Players class="content"/>
    <Tutorial class="content"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Criterias from "@/components/criteria/Criterias";
import Players from "@/components/players/Players";

export default Vue.extend({

  components: {Criterias, Players},
})
</script>
<style>

</style>
