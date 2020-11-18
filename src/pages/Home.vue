<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        text="Sejong University"
        img-src="https://cdn.pixabay.com/photo/2019/04/30/12/34/smart-4168483_960_720.jpg"
      > <h1>지속가능 사회를 위한 대학 운영, 온실가스 감축을 위한 친환경 교정 구축</h1></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://cdn.pixabay.com/photo/2018/05/11/09/07/technology-3389917_960_720.jpg">
        <h1>미래의 친환경 인재 양성을 위한 친환경 교육 및 연구 실시</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://cdn.pixabay.com/photo/2016/03/29/16/49/electricity-1288717_960_720.jpg">
      <h1>대학 및 지역사회에 친환경 문화 전파를 위한 참여 확산</h1></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://cdn.pixabay.com/photo/2018/05/11/09/07/technology-3389917_960_720.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="ㅋㅋㅋ" img-blank img-alt="Blank image">
        <p>
         아마마아
        </p>
      </b-carousel-slide>
    </b-carousel>
    

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
    <div>

    <div class="Cards">
  <b-card-group deck>
    <b-card>
    <img src="@/assets/no_image.jpg" style="width: 100%; height: auto;">
      <b-card-text>
       
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 1 mins ago</small>
      </template>
    </b-card>

    <b-card>
      <img src="@/assets/no_image.jpg" style="width: 100%; height: auto;">
      <b-card-text>
       
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 2 mins ago</small>
      </template>
    </b-card>

    <b-card>
      <img src="@/assets/no_image.jpg" style="width: 100%; height: auto;">
      <b-card-text>
      
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</div>

    <b-jumbotron>
    <template><img src="@/assets/no_image.jpg" ></template>
    <!-- <template #header>
    </template> -->
    <template #lead>
      
    </template>

    <hr class="my-4">

    <p>
     
    </p>
      <b-button variant="outline-primary">바로가기</b-button>
      <b-button variant="success">전력데이터 개방포털</b-button>
  </b-jumbotron>
</div>
  </div>
  
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
h1{
  text-align: left;
  padding: 0 0 250px 0;  
 

}
.Cards{
  margin: 30px 0 30px 0;
  padding: 10px;
}

</style>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
 export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
