<template>
  <div class="popup_container" @click="closeIfOutsidePopup">
    <div class="popup_main" @click.stop>
      <div class="close_popup" @click="close_portfolio">
        <img src="../../assets/img/close-window2.png" class="close_img" />
      </div>
      <div class="popup_body">
        <img src="../../assets/img/project/portfolio.png" class="popup_img" />
        <div class="popup_info">
          <strong>도서관 대여/예약 서비스</strong>

          <ul class="popup_info_list">
            <li><strong>Description</strong></li>
            <div class="popup_info_contents">
              저의 포트폴리오입니다. Vue.js를 통해 구성하였습니다.
            </div>
            <br>
            <div class="goDetail">Detail</div>
          </ul>
          <ul class="popup_info_list">
            <li><strong>Skill</strong></li>
            <div class="popup_info_contents">
              <ul class="popup_skill_list">
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>vue-router</li>
              </ul>
            </div>
          </ul>
          <ul class="popup_info_list">
            <li><strong>GitHub</strong></li>
            <div class="popup_info_contents">
              <a href="https://github.com/Been980804/Portfolio"
                >https://github.com/Been980804/Portfolio</a
              >   
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close_portfolio() {
      this.$emit("close");
    },
    closeIfOutsidePopup(event) {
      if (event.target === event.currentTarget) {
        this.close_portfolio();
      }
    },
  },
};
</script>

<style>
@import "../../assets/css/popup.css";
</style>
