<template>
  <div id="app">
    <div class="col-md-8" id="addresssearch">
         <label for="input-live2">도로명 주소</label>
        <b-form-group id="fieldset1">
          <b-form-input class="address1" id="input1" readonly="readonly" placeholder="Enter the street name address" v-model="userFullAddress"></b-form-input>
            <!-- <b-button v-b-modal.modal-sm class="adressmodal" size="sm" variant="success">주소 검색</b-button> -->
           <b-button id="show-btn" @click="$bvModal.show('adressmodal')">Open Modal</b-button>
            <b-modal id="adressmodal"  size="sm" centered title="도로명 주소">
             <DaumPostcode
               :on-complete=handleAddress
             />
            </b-modal>
              <!-- <vue-daum-postcode @onsearch="result = $event" style="border: 2px dashed #2f9763" /> -->
              <div>{{ result }}</div>
        </b-form-group>

        <label for="input-live2">상세 주소</label>
        <b-form-group id="fieldset2" >
          <b-form-input id="input2" placeholder="Enter a detailed address" v-model="userDetailAddress"></b-form-input>
        </b-form-group>
        <!-- <b-button variant="dark" size="sm" type=button @click="execDaumPostcode">주소 검색</b-button> -->
       <!-- <daum-post-code-modal @setUserData="setUserData" ref="modal"></daum-post-code-modal> -->
      </div>
  </div>
</template>

<script>
import DaumPostcode from 'vuejs-daum-postcode'

var handleAddress = (data) => {
  let fullAddress = data.address
  let extraAddress = ''
  if (data.addressType === 'R') {
    if (data.bname !== '') {
      extraAddress += data.bname
    }
    if (data.buildingName !== '') {
      extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName)
    }
    fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '')
  }

  console.log(fullAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
}

export default {
  name: 'App',
  components: {
    DaumPostcode
  },
  methods: {
    handleAddress
  }
}
</script>