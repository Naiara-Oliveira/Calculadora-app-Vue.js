<template>
  <div class="calculator">
    <Display :value="displayValue" />

    <Button label="AC" @onClick="clearMemory" operation />
    <Button label="Del" @onClick="addDigit" operation />
    <Button label="%" @onClick="setOperation" operation />
    <Button label="/" @onClick="setOperation" operation />
    <Button label="7" @onClick="addDigit" />
    <Button label="9" @onClick="addDigit" />
    <Button label="8" @onClick="addDigit" />
    <Button label="*" @onClick="setOperation" operation />
    <Button label="4" @onClick="addDigit" />
    <Button label="5" @onClick="addDigit" />
    <Button label="6" @onClick="addDigit" />
    <Button label="-" @onClick="setOperation" operation />
    <Button label="1" @onClick="addDigit" />
    <Button label="2" @onClick="addDigit" />
    <Button label="3" @onClick="addDigit" />
    <Button label="+" @onClick="setOperation" operation />
    <Button label="0" @onClick="addDigit" />
    <Button label="+/-" @onClick="addDigit" />
    <Button label="." @onClick="addDigit" />
    <Button label="√" @onClick="setOperation" operation />

    <Button
      style="background: #eb50bc"
      class="sinalIgual"
      label="="
      @onClick="setOperation"
      operation
    />
  </div>
</template>

<script>
import Display from "../components/DisplayCalcular";
import Button from "../components/ButtonCalcular";
import  somar from "../services/operacoes";
export default {
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [],
      totalGeral: 0,
      url: "http://localhost:3000",
    };
  },

  components: { Button, Display },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },

   async  setOperation(operation) {
          var elementos = {
            elementos: [10, 2, 2, 0],
          };
      var resultado;
      switch (operation) {
        case "+":
          this.url += "/somar";
          console.log(this.url);
          break;
        case "-":
          this.url += "/subtrair";
          console.log(this.url);
          break;
        case "/":
          this.url += "/dividir";
          break;
        case "*":
          this.url += "/multiplicacao";
          break;
        case "%":
          this.url += "/porcentagem";
          break;
        case "=":
         // somar(elementos);
          console.log( await somar(elementos));
          this.displayValue = resultado;
          this.totalGeral = resultado;
          break;
      }
    },
    addDigit(n) {
      this.displayValue = n;
      console.log(this.values);
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 255px;
  border-radius: 5px;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>
