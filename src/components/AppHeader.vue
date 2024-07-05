<!-- Header.vue -->

<template>
  <div class="header">
    <div class="navbar">
      <div class="logo_btn">
        <img src="../assets/img/logo2.png" @click="goMain" />
      </div>

      <div class="menu">
        <router-link
          :to="{ path: '/', exact: true }"
          class="menuList"
          :class="{ active: activeMenu === 'Home' }"
          >Home</router-link
        >
        <router-link
          :to="{ path: '/about' }"
          class="menuList"
          :class="{ active: activeMenu === 'About' }"
          >About</router-link
        >
        <router-link
          :to="{ path: '/project' }"
          class="menuList"
          :class="{ active: activeMenu === 'Project' }"
          >Project</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    goMain() {
      this.$router.push({ name: "Home" });
    },
  },
  watch: {
    $route(to) {
      // route가 변경될 때마다 activeMenu 업데이트
      if (to.name) {
        this.activeMenu = to.name;
      } else {
        this.activeMenu = ""; // 예외처리: 이름이 없는 route
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/css/header.css";
</style>
