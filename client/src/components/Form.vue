<template>
  <div>
    <h1>Convertion en nombre romain</h1>
    <el-row style="margin-top: 10px;">
      <el-col
      :span="10"
      :offset="7"
      v-loading="loading">
      <el-form 
        ref="form" 
        :model="number"
        label-position="left"
        label-width="200px">
         <el-row style="height:20px;margin-bottom:5px;color:red">{{ error }}</el-row>
          <el-form-item label="Nombre entre 0 et 100">
            <el-input
              v-model="number.decimal"
              size="mini"
              type="number">
            </el-input>
          </el-form-item>
          <el-form-item label="Romano number">
             <el-input
              v-model="romanoNumber"
              type="string"
              size="mini"
              disabled>
              </el-input>
          </el-form-item>
          <el-button type="primary" plain size="mini" @click="checkInput">Convertir</el-button>
        </el-form>
    </el-col>
    </el-row>
  </div>
</template>

<script>

import NumberService from './../Service/NumberService'

export default {
  name: 'Form',
  data() {
    return {
      number: {
        decimal: 2,
      },
      romanoNumber: '',
      error: '',
      loading: false,
    }
  },
  created() {
    var eventSource = new EventSource('http://localhost:3000/api/numbers/sse');
    let context = this;
    eventSource.addEventListener("message", function (e) {
      try {
        if (e.data) context.romanoNumber = e.data;
      }
      catch (e) {
        console.log(e)
        }
     });
  },
  methods: {
    checkInput () {
      this.loading = true;
      let nb = parseInt(this.number.decimal);
      if (nb === '' || isNaN(nb)) {
         this.error = "Veuillez entrer un nombre svp";
         this.loading = false;
      }
      else if (typeof nb !== "number") {
        this.error = "Veuillez entrer un nombre svp";
          this.loading = false;
      } else if (nb < 0 || nb > 100) {
        this.error = "Entrez un nombre entre 0 et 100 svp";
        this.loading = false;
      } else {
        this.error = '';
        this.loading = false;
        this.convertNumber(nb);
      }
    },
    async convertNumber (nb) {
      let context = this;
      NumberService.convertNumber(nb).then(function (value) {
        context.romanoNumber = value.romanoNumber;
        context.loading = false;
      }).catch();

    }
}
}
</script>


<style scoped>

.error{
  height:20px;
  color:red;
}

</style>
