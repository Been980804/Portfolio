<template>
  <div class="popup_container" @click="closeIfOutsidePopup">
    <div class="popup_main" @click.stop>
      <div class="close_popup" @click="close_bookply">
        <img src="../../assets/img/close-window2.png" class="close_img" />
      </div>
      <div class="popup_body">
        <img src="../../assets/img/project/bookPly.png" class="popup_img" />

        <div class="popup_info">
          <strong>도서관 대여/예약 서비스</strong>

          <ul class="popup_info_list">
            <li><strong>Description</strong></li>
            <div class="popup_info_contents">
              Vue.js, SpringBoot를 활용한 도서관 대여/예약 웹서비스 입니다.
              멜론의 플레이리스트에서 영감을 받아 회원이 북플레이리스트를 만들
              수 있는 기능을 추가하였습니다.
            </div>
            <br>
            <div class="goDetail" @click="openDetail">Go Detail...</div>
          </ul>
          <ul class="popup_info_list">
            <li><strong>Skill</strong></li>
            <div class="popup_info_contents">
              <ul class="popup_skill_list">
                <li>Java</li>
                <li>JavaScript</li>
                <li>Vue.js</li>
                <li>vue-router</li>
                <li>SpringBoot</li>
              </ul>
            </div>
          </ul>
          <ul class="popup_info_list">
            <li><strong>GitHub</strong></li>
            <div class="popup_info_contents">
              Front-End :
              <a href="https://github.com/Been980804/Gukbi-front-end"
                >https://github.com/Been980804/Gukbi-front-end</a
              >
              <br />
              Back-End :
              <a href="https://github.com/Been980804/Gukbi-back-end"
                >https://github.com/Been980804/Gukbi-back-end</a
              >
            </div>
          </ul>
        </div>
      </div>
    </div>
    <BookplyDetailP v-if="showDetail" @close="closeDetail"/>
  </div>
</template>

<script>
import BookplyDetailP from "../../components/popup/BookPlyDetailP.vue";

export default {
  components: {
    BookplyDetailP
  },
  data(){
    return{
      showDetail : false,
    }
  },
  methods: {
    close_bookply() {
      this.$emit("close");
    },
    closeIfOutsidePopup(event) {
      if (event.target === event.currentTarget) {
        this.close_bookply();
      }
    },
    openDetail(){
      this.showDetail = true;
    },
    closeDetail(){
      this.showDetail = false;
    }
  },
};
</script>

<style>
@import "../../assets/css/popup.css";
</style>
