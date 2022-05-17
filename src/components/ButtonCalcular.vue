<template>
  <button class="button" 
    @click="$emit('onClick',label)"
    :class="{ double, triple, operation }">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {},
    operation: { type: Boolean },
    double: { type: Boolean },
    triple: { type: Boolean },
  },
};
</script>

<style>
:root {
  --bg-button: #f0f0f0;
  --boder-button: solid 1px #888;

}

.button {
   
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--boder-button);
  border-bottom: var(--boder-button);
  outline: none;
  
}

.button:active {
  background-color: #ccc;
}

.button.double {
  grid-column: span 2;
}

.button.triple {
  grid-column: span 3;
}
.sinalIgual{
  width: 260px;
  font-size:1.8rem;
  display: block;
text-align: center;
}
.button.operation {
  background-color: magenta;
  color: #fff;
}
.button.operation:active {
  background-color: magenta;
}
</style>