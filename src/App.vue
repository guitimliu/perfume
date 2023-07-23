<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Banner from './components/Banner.vue'
import ProductFeature from './components/ProductFeature.vue'
import ProductDisplayList from './components/ProductDisplayList.vue'
import ProductDisplay from './components/ProductDisplay.vue'
import Subscribe from './components/Subscribe.vue'

import ProductCategories from './components/ProductCategories.vue'
import ProductList from './components/ProductList.vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue';
const route = useRoute()
// const layout = computed(() => route.meta.layout || null)
</script>

<template>
    <Header />
    <router-view></router-view>
    <Footer />
  <!-- <component :is="layout" v-if="layout">
    <router-view></router-view>
  </component> -->
</template>

<style lang="scss" scoped>
.home {

}
</style>
