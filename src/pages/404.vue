<template>
  <div class="page wrapper-content wrapper-content--fixed">
    <div class="page__container">
      <h1 class="page__title">Page Not Found</h1>
      <p class="page__text">
        Go to
        <router-link class="page__link link" to="/">home page</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url("../assets/github.png");
  background-size: contain;
  background-position: -370px -50px;
  overflow: hidden;
}

.page__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 200px;
}

.page__title {
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 24px;
}
</style>