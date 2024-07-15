<template>
  <div class="detail_container">
    <div class="detail_main">
        <div class="close_detail" @click="close_detail">
        <img src="../../assets/img/close-window2.png" class="close_img" />
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
    }
}
</script>

<style>
@import "../../assets/css/detailPopup.css";
</style>