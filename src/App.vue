<template>
 
  <div id="app">
    <CalculadoraPrincipal/>
  </div>
</template>

<script>

import CalculadoraPrincipal from './components/CalculadoraPrincipal.vue'

export default {
  name: 'App',
  components: {
    CalculadoraPrincipal
}
}
</script>
<style>
@font-face{
  font-family: 'Roboto';
  src: url('');
}

*{
  font-family: 'Roboto', monospace;
}

body{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  background: linear-gradient(to right, rgb(83, 105, 118), rgb(41,46,73));
}
</style>