<template>
  <button class="btn btnPrimary" :type="type" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>
