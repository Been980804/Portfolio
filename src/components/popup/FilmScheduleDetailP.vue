<template>
  <div class="detail_container" @click="closeIfOutsidePopup">
    <div class="detail_main">
      <div class="close_detail" @click="close_detail">
        <img src="@/assets/img/close-window.png" class="close_img" />
      </div>
      <div class="detail_body">
        <div class="detail_img_box">
          <button @click="prevImage" class="arrow left-arrow">&lt;</button>
          <div class="detail_img_box_title">
            <strong>{{ currentTitle }}</strong>
            <img :src="currentImage" class="detail_img" />
          </div>
          <button @click="nextImage" class="arrow right-arrow">&gt;</button>
        </div>
        <div class="detail_explain_box">
          <div v-for="(explain, index) in currentExplanation" :key="index">
            <strong class="detail_title">{{ explain.title }}</strong>
            <p class="detail_explain">{{ explain.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerImg from "@/assets/img/project/film/header.png";
import mainBannerImg from "@/assets/img/project/film/main_banner.png";
import footerImg from "@/assets/img/project/film/footer.png";
import mainMovieImg from "@/assets/img/project/film/main_movieList.png";
import movieDetailImg from "@/assets/img/project/film/movie_detail.png";

export default {
  data() {
    return {
      images: [headerImg, footerImg, mainBannerImg, mainMovieImg, movieDetailImg],
      titles: ["Header", "Footer", "배너", "현재상영작, 상영예정작 Top5", "영화 상세보기"],
      explanations: [
        [
          {
            title: "1. 로고 버튼",
            detail: "로고 버튼 클릭시 메인 화면으로 이동합니다.",
          },
          {
            title: "2. 검색",
            detail: "영화제목을 통해 원하는 영화를 검색할 수 있습니다.",
          },
          {
            title: "3. 로그인",
            detail: "로그인 버튼을 클릭하여 로그인 모달창을 출력합니다.",
          },
          {
            title: "4. 회원 정보",
            detail: "회원 정보 화면으로 이동합니다.",
          },
          {
            title: "5. 로그아웃",
            detail: "로그아웃 버튼을 클릭하여 계정에서 로그아웃합니다.",
          },
        ],
        [
          {
            title: "1. 공지사항 게시글",
            detail: "각 공지사항의 상세보기 페이지로 이동합니다.",
          },
          {
            title: "2. 공지사항 페이지",
            detail: "공지사항 게시글 페이지로 이동합니다.",
          },
          {
            title: "3. 문의사항 게시글",
            detail: "각 문의사항의 상세보기 페이지로 이동합니다.",
          },
          {
            title: "4. 문의사항 페이지",
            detail: "문의사항 게시글 페이지로 이동합니다.",
          },
        ],
        [
          {
            title: "1. 배너 이미지",
            detail: "배너 이미지 클릭시 영화정보 상세보기 페이지로 이동합니다.",
          },
          {
            title: "2. < > 버튼",
            detail:
              "박스오피스 영화 순위별로 5개 영화를 배너에 띄우고 < > 버튼으로 배너를 넘길 수 있습니다.",
          },
        ],
        [
          {
            title: "1. 현재 상영작 Top5",
            detail: "각 영화포스터 클릭시 해당 영화 상세정보 페이지로 이동합니다.",
          },
          {
            title: "2. 상영 예정작 Top5",
            detail:
              "각 영화포스터 클릭시 해당 영화 상세정보 페이지로 이동합니다.",
          },
        ],
        [
          {
            title: "1. 상영 시간표 비교",
            detail: "현 영화의 상영 시간표를 비교하는 모달을 띄웁니다.",
          },
          {
            title: "2. 상영 예정작 Top5",
            detail:
              "각 영화포스터 클릭시 해당 영화 상세정보 페이지로 이동합니다.",
          },
        ],
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentTitle() {
      return this.titles[this.currentIndex];
    },
    currentImage() {
      return this.images[this.currentIndex];
    },
    currentExplanation() {
      return this.explanations[this.currentIndex];
    },
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
    },
  },
};
</script>

<style>
@import "@/assets/css/detailPopup.css";
</style>
