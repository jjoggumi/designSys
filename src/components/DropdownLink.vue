<template>
  <div class="dropdown" :class="{'block':block}" ref="dropdown">
    <button @click="toggle" class="caption">{{ title }}</button> 
    <div v-if="isActive" class="content" >   
      <slot>  
      </slot>            
    </div>
  </div>
</template>

<script>
export default {
  name : "ComponentsDropdown",
  props:{
     dropdownData:Object,
     title:String,
     block:Boolean,
  },
  data() {
    return {
      isActive: false
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    close() {
      this.isActive = false;
    },
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.close();
      }
    }
  }
};
</script>