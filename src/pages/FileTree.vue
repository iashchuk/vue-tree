<template>
  <div class="page wrapper-content wrapper-content--fixed">
    <FileLegend />
    <Tree />
  </div>
</template>

<script>
import Vue from "vue";
import Tree from "../components/Tree/Tree";
import FileLegend from "../components/Tree/FileLegend";

export default {
  components: {
    Tree,
    FileLegend
  }
};
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.page__title {
  margin-top: 200px;
  font-weight: bold;
  font-size: 24px;
}
</style>
