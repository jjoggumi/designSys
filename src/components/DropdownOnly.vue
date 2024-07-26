<template>    
  <div class="dropdown" ref="dropdown">
    <button type="button" @click="$emit('toggle')" class="caption">      
      <template v-if="selectOption.length > 0">
        <span v-for="(a, i) in selectOption" :key="i">{{ a.label }} / </span>
      </template>
      <template v-else>
        {{ title }}
      </template>
    </button>
    <div class="content">
      <ul v-if="isActive">
        <li v-for="(a,i) in options" :key="i" class="list">
          <input type="checkbox" :value="a.value" :id="'option_' + i" v-model="a.checked">
          <label :for="'option_' + i">{{ a.label }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name : 'ComponentsDropdown',
  props:{
     dropdownData:Object,
     title:String,
  },
  emits: ['toggle','closed'], 
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  computed:{
    options() {
      return this.dropdownData.options;
    },
    isActive() {
      return this.dropdownData.isActive;
    },
    selectOption(){
      return this.dropdownData.options.filter(option => option.checked);
    }
  },
  methods:{    
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.$emit('closed');
      }
    }
  }
}
</script>
<style scoped>
.dropdown{
  margin:0.5rem;
}
</style>