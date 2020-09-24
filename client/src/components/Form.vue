<template>
  <div>
    <h1> Convertion en nombre romain</h1>
    <form
      ref="number"
      name="number"
      :model="number" 
       @submit="checkInput"
      enctype="multipart/form-data"
      onsubmit="return false;"
      novalidate="true"
    >
      <p class="error">
        {{ error }}
      </p>
     <p>
        <label for="decimal" style="width:100px;margin-right:2px;">Nombre entre 0 et 100</label>
        <input
          id="decimal"
          v-model="number.decimal"
          type="number"
          name="decimal"
          style="margin-right:2px;"
          >

      </p>
      <p>
        <label for="decimal" style="width:100px;margin-right:2px;"> <img style="height: 20px;" src="./../assets/roman-helmet.svg"></label>
         <input
          v-model="romanoNumber"
          type="string"
          name="romanoNumber"
          style="margin-right:2px;"
          disabled
          >
<!--          
          <span>{{romanoNumber}}</span> -->
     </p>
     <p>
               <button class="pointer">Convertir</button>
     </p>
    </form>
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
      isLoading: false,
      isError: false,
    }
  },
  methods: {
    convert() {
      this.$refs['number'].validate((valid) => {
        console.log(valid);
    });
    },
    checkInput (e) {
      let nb = parseInt(this.number.decimal);
      if (nb === '' || isNaN(nb)) {
        console.log('isnotanumber');
         this.error = "Veuillez entrer un nombre svp";
      }
      else if (typeof nb !== "number") {
        console.log('is not a number');
        this.error = "Veuillez entrer un nombre svp"
      } else if (nb < 0 || nb > 100) {
         console.log('is not between 0 and 100');
        this.error = "Entrez un nombre entre 0 et 100 svp"
      } else {
        console.log('Is a Number between 0 and 100')
        this.error = ''
        this.convertNumber(nb);
      }

      e.preventDefault();

    },
    async convertNumber (nb) {
      console.log('convert Function');
      console.log(nb);
      //  NumberService.getNumber().then(function (value) {
      //   console.log('Retour value');
      //   console.log(value);
      // }).catch();
      let context = this;
      NumberService.convertNumber(nb).then(function (value) {
        console.log('Retour value');
        console.log(value);
        context.romanoNumber = value.romanoNumber;
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
