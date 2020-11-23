<template>
  <card>
    <h3 slot="header" class="title">회원가입</h3>
     <div class="row"> 
      <div class="col-md-3 px-md-1">
        <base-input label="ID"
                  v-model="model.id"
                  placeholder="ID">
        </base-input>
      </div>
      <div class="col-md-3 px-md-1">
        <base-input label="Password"
                  v-model="model.password"
                  placeholder="Password">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 px-md-1">
        <base-input label="관리자 이름"
                  placeholder="Username"
                  v-model="model.username">
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="이메일"
                  type="email"
                  placeholder="name@email.com">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-5 pr-md-1">
        <base-input label="학교"
                  placeholder="School Name"
                  v-model="model.company">
        </base-input>
      </div>
      <div class="col-md-8">
        <base-input label="주소"
                  v-model="model.address"
                  placeholder="School Address">
        </base-input>
        <base-button >주소 검색</base-button>
      </div>
    </div>

      <div class="col-md-3 px-md-1">
        <base-input label="데이터 업로드"
                  v-model="model.password"
                  placeholder="Data Upload">
        </base-input>
        <base-button >파일 찾기</base-button>
      </div>

    <div class="row"> 
     <div class="col-md-3 px-md-1">
        <base-input label="ISmart ID"
                  v-model="model.id"
                  placeholder="ISmart ID">
        </base-input>
      </div>
      <div class="col-md-3 px-md-1">
        <base-input label="ISmart Password"
                  v-model="model.password"
                  placeholder="ISmart Password">
        </base-input>
      </div>
    </div> 
  
    <base-button slot="footer" type="primary" fill>Save</base-button>
  </card>
</template>
<script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');

h3{
  font-family: 'Jua', sans-serif;
  letter-spacing: 2.5px;
}
label{
  font-size: 30px;;
}
</style>
