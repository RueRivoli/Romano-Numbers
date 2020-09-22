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
        <label for="decimal">Nombre entre 0 et 100</label>
        <input
          id="decimal"
          v-model="number.decimal"
          type="number"
          name="decimal">
      </p>
     <button>Convertir</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      number: {
        decimal: 2,
      },
      error: ''
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
      }
      e.preventDefault();
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
</style>
