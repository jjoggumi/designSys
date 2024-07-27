<template>
  <aside>
    <div class="navBrand"><a href="@/">Creative Lab</a></div>   
    <div class="collapseSet type02">
      <CollapseAside v-for="(route, index) in routes" :key="index" :active="true" :isActive="mainCate === route.name" :nonChild="!route.children">
        <template #tit>
          <router-link :to="route.path" v-if="!route.children">{{ route.name }}</router-link>
          <span v-else>{{ route.name }}</span>
        </template>
        <template #con>
          <div v-for="(childRoute, subIndex) in route.children" :key="subIndex" class="item" >
            <router-link :to="route.path + '/' + childRoute.path">{{ childRoute.name }}</router-link>
            <!--
            {{ $route.fullPath }}
            {{ $route.path }}
            {{ $route.name }}
            {{ $route.params.id }}
            {{ $router.push('/detail/0') }}
            {{ $router.go(-1)}}
            -->
          </div>
        </template>
      </CollapseAside>
    </div>
  </aside>
</template>

<script>
import CollapseAside from '@/components/CollapseAside.vue';

export default {
  components: { CollapseAside },
  name: 'AsideLayout',
  props:{
    routes : Array,
    mainCate : String
  },
  data(){
    return{
    }
  }
}
</script>