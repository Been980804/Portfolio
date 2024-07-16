<template>
  <div class="container">
    <div class="project">
      <div class="prj_title">
        <strong>__________ PROJECT ___________________________________________________________________</strong>
      </div>

      <div class="project_img_box">
        <div class="project_img_list">
          <strong>영화 상영시간표 비교</strong>
          <img
            src="../assets/img/project/film/filmSchedule.png"
            class="project_img"
            @click="open_filmSchedule"
          />
          <FilmscheduleP v-if="filmschedule" @close="close_filmSchedule"/>

        </div>
        <div class="project_img_list">
          <strong>북플리</strong>
          <img src="../assets/img/project/bookPly.png" class="project_img" @click="open_bookply"/>
          <BookplyP v-if="bookply" @close="close_bookply" />
        </div>
        <div class="project_img_list">
          <strong>포트폴리오</strong>
          <img src="../assets/img/project/portfolio.png" class="project_img" @click="open_portfolio"/>
          <PortfolioP v-if="portfolio" @close="close_portfolio"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioP from "../components/popup/PortfolioP.vue";
import FilmscheduleP from "../components/popup/FilmScheduleP.vue";
import BookplyP from "../components/popup/BookPlyP.vue";
export default {
  components:{PortfolioP, FilmscheduleP, BookplyP},
  data(){
    return{
      portfolio : false,
      filmschedule : false,
      bookply : false,
    };
  },
  methods:{
    open_portfolio(){
      this.portfolio = true;
    },
    close_portfolio(){
      this.portfolio = false;
    },
    open_filmSchedule(){
      this.filmschedule = true;
    },
    close_filmSchedule(){
      this.filmschedule = false;
    },
     open_bookply(){
      this.bookply = true;
    },
    close_bookply(){
      this.bookply = false;
    },
  }
};
</script>

<style>
@import "../assets/css/project.css";
</style>
