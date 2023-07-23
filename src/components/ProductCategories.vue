<script setup>
</script>

<template>
  <div class="productCategories">
    <ul class="productCategories__list container">
      <li v-for="i in 6" :key="i" class="productCategories__item">
        <a href="#" class="productCategories__item__link">
          CHANEL
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.productCategories {
  display: none;

  @media (min-width:768px) {
    display: block;
    background-color: #916000;
    margin-bottom: 80px;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 28px;
  }

  &__item {
    &__link {
      display: block;
      color: #fff;
      text-decoration: none;
      transition: opacity .3s;
      padding: 14px 0;

      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
