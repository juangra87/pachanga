<template>
  <div>
    <div class="content_title">
      <h1>{{ $t('criteria.title') }}</h1>
    </div>
    <div class="content_expand">
      <criteriaForm/>
      <CriteriaList/>
    </div>

  </div>
</template>

<script>
import CriteriaList from "@/components/criteria/CriteriaList";
import CriteriaForm from "@/components/criteria/CriteriaForm";

export default {
  name: "Criterias",
  components: {CriteriaForm,CriteriaList},
}
</script>

<style scoped>
</style>
