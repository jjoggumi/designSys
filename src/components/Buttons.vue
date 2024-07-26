<template>
  <button :class="['btn', icoVariant, icoSize, {'btn-block': block } , icoPosition]" @click="$emit('click')">
    <i v-if="icoPosition" class="ico" 
    :style="{ WebkitMaskImage: `url('/img/svgIco/${this[icoPosition]}.svg')`, maskImage: `url('/img/svgIco/${this[icoPosition]}.svg')` }">
    {{ icoPosition }}</i>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name : "ComponentsButton",
  props: {   
    variant: String,
    size: String,
    block: Boolean,
    icoLeft: String,
    icoRight: String,
    icoTop: String,
    icoBottom: String
  },
  computed: {
    icoPosition() {
      const positions = ['icoLeft', 'icoRight', 'icoTop', 'icoBottom'];
      for (const position of positions) {
        if (this[position]) return position;
      }
      return ''; // No icon position prop provided
    },
    icoSize() {
      return this.size ? `btn-${this.size}` : '';
    },
    icoVariant() {
      return this.variant ? `btn-${this.variant}` : '';
    }
  },
}
</script>