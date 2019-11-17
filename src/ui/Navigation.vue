<template>
  <nav class="navbar">
    <div class="navbar__container container">
      <div class="navbar__content navbar-content">
        <div class="navbar__logo logo">VUE-APP</div>
        <ul class="navbar__list navbar-list">
          <li
            class="navbar__item navbar-item"
            v-for="link in links"
            :key="link.title"
          >
            <router-link class="navbar__link navbar-link" :to="link.url">{{
              link.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "/"
        },
        {
          title: "File tree",
          url: "/tree"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.navbar {
  .navbar__container {
    max-width: none;
  }
}
.navbar__link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>
