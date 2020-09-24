<template>
  <div>
    <h1> Convertion en nombre romain</h1>
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
              id="decimal"
              v-model="number.decimal"
              name="decimal"
              size="mini"
              type="number">
            </el-input>
          </el-form-item>
          <el-form-item label="Romano number">
             <el-input
              v-model="romanoNumber"
              type="string"
              name="romanoNumber"
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
      isError: false,
    }
  },
  methods: {
    checkInput () {
      this.loading = true;
      let nb = parseInt(this.number.decimal);
      if (nb === '' || isNaN(nb)) {
        console.log('isnotanumber');
         this.error = "Veuillez entrer un nombre svp";
         this.loading = false;
      }
      else if (typeof nb !== "number") {
        console.log('is not a number');
        this.error = "Veuillez entrer un nombre svp";
          this.loading = false;
      } else if (nb < 0 || nb > 100) {
         console.log('is not between 0 and 100');
        this.error = "Entrez un nombre entre 0 et 100 svp";
        this.loading = false;
      } else {
        console.log('Is a Number between 0 and 100')
        this.error = '';
        this.loading = false;
        this.convertNumber(nb);
      }
    },
    async convertNumber (nb) {
      console.log('convert Function');
      console.log(nb);
      let context = this;
      NumberService.convertNumber(nb).then(function (value) {
        console.log('Retour value');
        console.log(value);
        context.romanoNumber = value.romanoNumber;
        context.loading = false;
      }).catch();

    }
}
}
</script>


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

.error{
  height:20px;
  color:red;
}

.pointer{
  cursor: pointer;
}
</style>
