<template>
  <div class="collapsList" :class="{ active: active}">
    <div class="collapsible" @click="toggleCollapse">
      <slot name="tit"></slot>
    </div>
    <transition name="collaps"
      v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:before-leave="beforeLeave" v-on:leave="leave">
      <div class="collapsCon" v-if="active">
        <slot name="con"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name : "ComponentsCollapseSlot",
  props: {   
    onActive :Boolean
  },
  data() {
    return {
      active: this.onActive
    };
  }, 
  methods: {
    toggleCollapse() {
      this.active = !this.active;
    },    
    beforeEnter: function(el) {
      el.style.height = '0';
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave: function(el) {
      el.style.height = '0';
    }
  },
}
</script>