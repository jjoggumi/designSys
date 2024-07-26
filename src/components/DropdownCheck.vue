<template>    
  <div class="dropdown" :class="{'block':block}" ref="dropdown">
    <button type="button" @click="$emit('toggle', dropdownData.name)" class="caption">    
      <slot name="dropdownTitle"> 
        <template v-if="dropdownData.selectOpt.length > 0">
          <span v-for="(a, i) in dropdownData.selectOpt" :key="i">{{ a.label }} / </span>
        </template>
        <template v-else>
          {{ title }}
        </template>
      </slot> 
    </button>
    <div class="content">
      <ul v-if="dropdownData.isActive">
        <li v-for="(a,i) in dropdownData.options" :key="i" class="list">
          <input type="checkbox" :value="a.value" :id="'option_' + i" v-model="a.checked" @change="$emit('changeOption', dropdownData.name)">
          <label :for="'option_' + i">{{ a.label }} </label>
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
     block:Boolean,
  },
  emits: ['toggle','closed', 'changeOption'], 
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods:{    
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.$emit('closed', this.dropdownData.name);
      }
    }
  }
}
</script>