<template>
  <Aside :routes="routes" :mainCate="mainCate" />
  <!-- {{ mainCate }}  -->  
  <main>    
    <HeadTitle/>
    <router-view ></router-view> 
  </main>
</template>

<script>
import Aside from '@/views/layout/Aside'
import HeadTitle from '@/views/layout/HeadTitle'
import router from '@/router/router.js';
export default {
  name: 'App',
  components:{
    Aside, HeadTitle
  },
  data() {
    return {
      routes: router.options.routes,
    }
  },
  computed: {
    mainCate() {
      const currentPath = this.$route.path;
      for (const i of this.$route.matched) {
        if (currentPath.startsWith(i.path)) {
          return i.name;
        }
      }
      return "Unknown";
    }
  }
}
</script>