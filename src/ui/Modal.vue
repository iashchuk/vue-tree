<template>
  <transition name="modal">
    <div class="modal" @click="$emit('onClose')">
      <div class="modal__container" @click.stop>
        <div class="modal__header">
          <span class="modal__title">{{ title }}</span>
          <CloseButton
            class="modal__button close"
            :click="() => $emit('onClose')"
          />
        </div>
        <div class="modal__body">
          <slot>Default body</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CloseButton from "./buttons/CloseButton";

export default {
  components: {
    CloseButton
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
  computed: {},
  methods: {
    handleKeyDown(evt) {
      if (evt.code === "Escape") {
        this.$emit("onClose");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00, 00, 00, 0.48);
}

.modal__container {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}
.modal__header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .close {
    cursor: pointer;
  }
}
.modal__body {
  text-align: center;
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal__container,
.modal-leave-active .modal__container {
  transform: scale(1.2);
}
</style>
