<template>
  <div class="detail_container" @click="closeIfOutsidePopup">
    <div class="detail_main">
        <div class="close_detail" @click="close_detail">
        <img src="../../assets/img/close-window.png" class="close_img" />
      </div>
        <div class="detail_body">
            bookply
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        close_detail() {
            this.$emit("close");
        },
        closeIfOutsidePopup(event) {
            if (event.target === event.currentTarget) {
            this.close_detail();
          }
        },
    }
}
</script>

<style>
@import "../../assets/css/detailPopup.css";
</style>