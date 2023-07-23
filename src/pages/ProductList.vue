<script setup>
import ProductCategories from '../components/ProductCategories.vue'
import ProductList from '../components/ProductList.vue'
import Pagination from '../components/Pagination.vue'
</script>

<template class="products">
  <productCategories />
  <ProductList />
  <Pagination class="products__pagination" />
</template>

<style lang="scss" scoped>
.products {
  &__pagination {
    margin-bottom: 40px;
  }
}
</style>