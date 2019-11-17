<template>
  <ul class="tree">
    <Child
      :file="initial"
      @createFolder="createFolder"
      @addFile="addFile"
      @removeFile="removeFile"
      @editFile="editFile"
    ></Child>
  </ul>
</template>

<script>
import Vue from "vue";
import Child from "./Child";
import FileLegend from "./FileLegend";
import { filterTree, updateTree } from "../../helpers/processTree";

export default {
  components: {
    Child,
    FileLegend
  },
  data() {
    return {
      initial: {
        id: 0,
        root: true,
        name: "FILE-CABINET",
        children: [
          { id: 1, name: "photo.png" },
          { id: 2, name: "story.doc" }
        ]
      }
    };
  },
  methods: {
    createFolder({ id, file, department }) {
      const child = { ...file };
      Vue.set(file, "id", id);
      Vue.set(file, "children", [child]);
      Vue.set(file, "name", department);
    },

    addFile({ file, name, id }) {
      file.children.push({
        id,
        name
      });
    },

    removeFile({ file }) {
      const filterFunc = item => item.id !== file.id;

      const filtered = this.initial.children
        .map(item => filterTree(filterFunc, item))
        .filter(Boolean);

      this.initial = { ...this.initial, children: filtered };
    },

    editFile({ file, name }) {
      const updateFunc = item => item.id === file.id;

      const updated = this.initial.children.map(item =>
        updateTree(updateFunc, item, { name })
      );

      this.initial = { ...this.initial, children: updated };
    }
  }
};
</script>

<style lang="scss">
.tree {
  width: 100%;
  max-width: 100%;
  padding: 20px;
  line-height: 1.5em;
}
</style>
