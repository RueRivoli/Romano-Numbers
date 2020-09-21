<template>
  <div class="hello">
    <h1> Nombre décimal</h1>
    <form
      id="app"
      ref="number"
      :model="number" 
      :rules="rulesNumber"
      enctype="multipart/form-data"
      >
     <p>
        <label for="number">Nombre</label>
        <input
          id="number"
          v-model="number.decimal"
          type="number"
          name="number">
      </p>
     <button @click="convert">Convertir</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      number: {
        decimal: '',
      },
      rulesNumber: {
        decimal: [
          { pattern: '^[0-100]+$', message: 'Le numéro rentré n\'est pas un nombre décimal compris entre 0 et 100', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    convert() {

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
</style>
