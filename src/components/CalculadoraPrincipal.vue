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
import axios from "axios";
export default {
  data: function () {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      totalGeral: 0,
    };
  },

  components: { Button, Display },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      var elementos = [this.totalGeral, this.displayValue];
      var resultado;
      var url = "http://localhost:3000";
      switch (operation) {
        case "+":
          url += "/somar";
          break;
        case "-":
          url -= "/subtrair";
          break;
        case "/":
          url /= "/dividir";
          break;
        case "*":
          url *= "/multiplicacao";
          break;
        case "%":
          url %= "/porcentagem";
          break;
        case "=":
          axios.post(url, elementos).then(function (retorno) {
            resultado = retorno;
          });
          this.displayValue = resultado;
          this.totalGeral = resultado;
          console.log(operation);
          break;
      }
    },
    addDigit(n) {
      console.log(n);
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
