<template>
  <button class="close" type="button" @click="click"></button>
</template>

<script>
export default {
  props: {
    click: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.close {
  position: relative;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
   transition: 0.3s;

  &:hover {
    &::before,
    &::after {
         transition: 0.3s;
      background-color: tomato;
    }
  }
}
.close::before,
.close::after {
  position: absolute;
  right: -3px;
  width: 100%;
  height: 2px;
  content: "";
  background-color: #e4e4e4;
}
.close::before {
  transform: rotate(-45deg);
}
.close::after {
  transform: rotate(45deg);
}
</style>
