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
  
    <Button label="√" @onClick="addDigit" operation/>



    <Button style="background: #eb50bc" class="sinalIgual"  label="=" @onClick="setOperation" operation />
  </div>
</template>

<script>
import Display from "../components/DisplayCalcular.vue";
import Button from "../components/ButtonCalcular.vue";

export default ({
  components: {
     Button,
     Display
  }
})
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
