<template>
  <AppHeader></AppHeader>
  <router-view class="router"></router-view>
  <AppFooter></AppFooter>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
.router-link-active {
  text-decoration: none; /* 밑줄 제거 */
  color: black; /* 클릭시 색상 변경 */
  font-weight: bold; /* 클릭시 글씨 두껍게 */
}
.router {
  min-height: 700px;
  background: rgb(231, 231, 231);
  margin: auto 60px;
}
</style>
