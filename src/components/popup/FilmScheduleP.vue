<template>
  <div class="popup_container" @click="closeIfOutsidePopup">
    <div class="popup_main" @click.stop>
      <div class="close_popup" @click="close_filmschedule">
        <img src="../../assets/img/close-window2.png" class="close_img" />
      </div>
      <div class="popup_body">
        <img
          src="../../assets/img/project/filmSchedule.png"
          class="popup_img"
        />
        <div class="popup_info">
          <strong>박스오피스 영화상영시간표 비교 서비스</strong>
          <ul class="popup_info_list">
            <li><strong>Description</strong></li>
            <div class="popup_info_contents">
              React, SpringBoot를 활용한 박스오피스 상영시간표 비교 웹서비스
              입니다. Python의 BeautifulSoup, Selenium을 이용하여 영화 정보를
              크롤링해왔습니다.
            </div>
            <br>
            <div class="goDetail" @click="openDetail">Go Detail...</div>
          </ul>
          <ul class="popup_info_list">
            <li><strong>Skill</strong></li>
            <div class="popup_info_contents">
              <ul class="popup_skill_list">
                <li>Java</li>
                <li>Python</li>
                <li>React</li>
                <li>react-router</li>
                <li>SpringBoot</li>
                <li>JSoup</li>
                <li>BeautifulSoup</li>
                <li>Selenium</li>
              </ul>
            </div>
          </ul>
          <ul class="popup_info_list">
            <li><strong>GitHub</strong></li>
            <div class="popup_info_contents">
              Front-End :
              <a href="https://github.com/Been980804/Graduate-front-end"
                >https://github.com/Been980804/Graduate-front-end</a
              >
              <br />
              Back-End :
              <a href="https://github.com/Been980804/Graduate-back-end"
                >https://github.com/Been980804/Graduate-back-end</a
              >
            </div>
          </ul>
        </div>
      </div>
    </div>
    <FilmScheduleDetailP v-if="showDetail" @close="closeDetail"/>
  </div>
</template>

<script>
import FilmScheduleDetailP from "../../components/popup/FilmScheduleDetailP.vue";

export default {
  components: {
    FilmScheduleDetailP,
  },
  data(){
    return{
      showDetail : false,
    }
  },
  methods: {
    close_filmschedule() {
      this.$emit("close");
    },
     closeIfOutsidePopup(event) {
      if (event.target === event.currentTarget) {
        this.close_filmschedule();
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
