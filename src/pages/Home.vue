<script setup>
import Banner from '../components/Banner.vue'
import ProductFeature from '../components/ProductFeature.vue'
import ProductDisplayList from '../components/ProductDisplayList.vue'
import ProductDisplay from '../components/ProductDisplay.vue'
import Subscribe from '../components/Subscribe.vue'
</script>

<template>
    <Banner />
    <div class="container">
      <ProductFeature />
    </div>
    <ProductDisplayList />
    <div class="container">
      <ProductDisplay />
    </div>
    <Subscribe />
</template>
