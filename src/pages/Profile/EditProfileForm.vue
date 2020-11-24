<template>
  <card>
    <h3 slot="header" class="title">회원가입</h3>
    <div class="row">  
    <!-- <div class="col-md-3 pr-md-1">
        <base-input label="ID"
                    v-model="model.id"
                    placeholder="ID">
        </base-input>
      </div> -->
      <div class="col-md-3 pr-md-1" role="group">
        <label for="input-live">ID</label>
          <b-form-input
              id="input-live"
              type="text"
              v-model="id"
              :state="idState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="Enter your ID"
              trim
          ></b-form-input> 
       <b-input-group-append>
             <b-button class ="idcheck" size="sm" variant="dark">중복 확인</b-button>
          </b-input-group-append>
          <b-form-invalid-feedback id="input-live-feedback">
             6글자 이상 입력하시오
          </b-form-invalid-feedback>
      </div>
     </div> 

     <!-- <div class="form-group mb-3">
	<label for="email">Email</label>
	<input type="text" class="form-control" id="email" v-model="email" placeholder="Enter email" @blur="checkDuplicate" />
	<span class="badge badge-danger mt-1" v-if="!availableEmail">이미 사용중인 이메일입니다.</span>
	<span class="badge badge-danger mt-1" v-if="!availableEmailForm">이메일 형식이 다릅니다.</span>
</div> -->

     <!--<div class="col-md-3 px-md-1">
        <base-input label="Password"
                  v-model="model.password"
                  placeholder="Password">
        </base-input>
      </div> -->
      <div class="row"> 
      <div class="col-md-3 pr-md-1" role="group">
        <label for="input-live2">Password</label>
          <b-form-input
              id="input-live2"
              type="password"
              maxlength="13"
              v-model="password"
              :state="passwordState"
              aria-describedby="input-live2-help input-live2-feedback"
              placeholder="Enter your Password"
              trim
          ></b-form-input>
          <b-form-invalid-feedback id="input-live2-feedback">
             8글자 이상 입력하시오
          </b-form-invalid-feedback>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 pr-md-1">
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
        <b-button variant="dark" size="sm" v-on:click="execDaumPostcode">주소 검색</b-button>
      </div>
    </div>

      <div class="col-md-7 px-md-1">
        <!-- <base-input label="데이터 업로드"
                  v-model="model.password"
                  placeholder="Data Upload">
        </base-input>
        <base-button >파일 찾기</base-button> -->
        <label for="input-live">데이터 업로드</label>
        <b-form-file class="mt-3"
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Data Upload"
            drop-placeholder="Drop file here"
            browse-text ="파일 첨부"
        ></b-form-file>
        <div class="data">첨부된 파일: {{ file1 ? file1.name : '' }}</div>
      </div>

    <div class="row"> 
     <div class="col-md-3 pr-md-1">
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
  
    <b-button slot="footer" type="submit" variant="primary" fill>Save</b-button>
  </card>
</template>
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
     computed: {
      idState() {
        return this.id.length > 5 ? true : false
      },
      passwordState() {
        return this.password.length > 7 ? true : false
      }
    },
    data() {
      return {
        id: '',
        password: '',
        file1: []
      }
    },
    methods: {
      filesChange(file1) {
        this.file1 = file1
      },
      execDaumPostcode : function(event) {
      new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
            // 예제를 참고하여 다양한 활용법을 확인해 보세요.
             var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("sample6_extraAddress").value = extraAddr;
                
                } else {
                    document.getElementById("sample6_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("sample6_detailAddress").focus();
        }
      }).open();
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
.data{
  font-size: 13px;
  letter-spacing: 1px;
  margin-left: 10px;
  margin-top: 9px;
}
b-form-invalid-feedback{
  letter-spacing: 1px;
}
.idcheck{
    margin-left: 30px;
}
</style>
