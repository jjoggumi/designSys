<template>
  <article class="dropdownSys">    
    <section>
      <h2>Dropdown Link</h2>      
      <DropdownLink title="Select Link" >
        <slot>
          <ul class="list">
            <li><a href="http://google.com" target="_blank">Option 01</a></li>
            <li><a href="http://naver.com" target="_blank">Option 02</a></li>
            <li><a href="http://daum.net" target="_blank">Option 03</a></li>
          </ul>
        </slot>
      </DropdownLink>
    </section> 

    <section>
      <h2>Dropdown Single Option</h2>      
      <Dropdown :dropdownData="dropdown01" title="Select an Single option" @toggle="toggle($event)" @closed="closed($event)" @radioSelectOpt="radioSelectOpt($event)">
        <template v-slot:dropdownTitle></template>
      </Dropdown>
      <p>Selected value: <span v-for="(a, i) in dropdown01.selectOpt" :key="i">{{ a.label }} </span></p>
    </section> 
    
    <section>
      <h2>Dropdown Radio Option</h2>      
      <DropdownRadio :dropdownData="dropdown02" title="Select an Single option" @toggle="toggle($event)" @closed="closed($event)"  @radioSelectOpt="radioSelectOpt($event)">
        <template v-slot:dropdownTitle></template>
      </DropdownRadio>
      <p>Selected value: <span v-for="(a, i) in dropdown02.selectOpt" :key="i">{{ a.label }} </span></p>
    </section> 

    <section>
      <h2>Dropdown Checkbox options</h2>      
      <DropdownCheck :dropdownData="dropdown03" title="Select an Multiple options" @toggle="toggle($event)" @closed="closed($event)" @checkSelecOpt="checkSelecOpt($event)">
        <template v-slot:dropdownTitle></template>
      </DropdownCheck>
      <p>Selected value: <span v-for="(a, i) in dropdown03.selectOpt" :key="i">{{ a.label }} </span></p>
    </section> 
  </article>  
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';
import DropdownLink from '@/components/DropdownLink.vue';
import DropdownRadio from '@/components/DropdownRadio';
import DropdownCheck from '@/components/DropdownCheck';

export default {
  name : 'ComponentsDropdown',
  components : {
    Dropdown,
    DropdownLink,
    DropdownRadio,
    DropdownCheck, 
  },
  data () {
    return { 
      dropdown01 : {
        name : "dropdown01",
        isActive: false,
        selectOpt:[],
        options: [
          { value:'singleOption1', label:'SingleOption 1', checked:false },
          { value:'singleOption2', label:'SingleOption 2', checked:false },
          { value:'singleOption3', label:'SingleOption 3', checked:false }
        ]
      }, 
      dropdown02 : {
        name : "dropdown02",
        isActive: false,
        selectOpt:[],
        options: [
          { value:'radioOption1', label:'RadioOption 1', checked:false },
          { value:'radioOption2', label:'RadioOption 2', checked:false },
          { value:'radioOption3', label:'RadioOption 3', checked:false }
        ]
      },
      dropdown03 : {
        name : "dropdown03",
        isActive: false,
        selectOpt:[],
        options: [
          { value:'checkboxOption1', label:'CheckboxOption 1', checked:false },
          { value:'checkboxOption2', label:'CheckboxOption 2', checked:false },
          { value:'checkboxOption3', label:'CheckboxOption 3', checked:false }
        ]
      },
    }
  },
  methods: {
    toggle(e){
      this[e].isActive = !this[e].isActive;
    },
    closed(e){
      this[e].isActive = false;
    },
    radioSelectOpt([e, a]){
      this[e].selectOpt = [a];
      this[e].isActive = false;
    },
    checkSelecOpt(e){
      var a = this[e].options.filter(option => option.checked) 
      this[e].selectOpt = a;
    },
  }
}
</script>
<style scoped>
.dropdown{
  margin-bottom:0.5rem;
}
</style>
  