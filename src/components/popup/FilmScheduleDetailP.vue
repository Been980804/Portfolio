<template>
  <div class="detail_container" @click="closeIfOutsidePopup">
    <div class="detail_main">
      <div class="close_detail" @click="close_detail">
        <img src="@/assets/img/close-window.png" class="close_img" />
      </div>
      <div class="detail_body">
        <div class="detail_img_box">
          <button @click="prevImage" class="arrow left-arrow">&lt;</button>
          <img :src="currentImage" class="detail_img" />
          <button @click="nextImage" class="arrow right-arrow">&gt;</button>
        </div>
        <div class="detail_explain_box">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/img/project/film/header.png'),
        require('@/assets/img/project/film/main_banner.png'),
        // 추가 이미지 경로
      ],
      currentIndex: 0
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    close_detail() {
      this.$emit("close");
    },
    closeIfOutsidePopup(event) {
      if (event.target === event.currentTarget) {
        this.close_detail();
      }
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>

<style>
@import "@/assets/css/detailPopup.css";
</style>
