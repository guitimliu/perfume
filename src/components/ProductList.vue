<script setup>
</script>

<template>
  <ul class="productList container">
    <li v-for="i in 12" :key="i" class="productList__item">
      <img src="../assets/img/product1.jpg" alt="Poppy & Barley" class="productList__item__img">
      <h2 class="productList__item__title">
        Poppy & Barley
      </h2>
      <a href="#" class="productList__item__category">
        Jo Malone
      </a>
      <div class="productList__item__price">
        <p class="productList__item__price--actual">
          NT$1,380
        </p>
        <p class="productList__item__price--origin">
          NT$1,580
        </p>
      </div>
      <div class="productList__item__button">
        <a href="#">
          <span class="material-icons productList__item__button__icon">favorite</span>
        </a>
        <a href="#">
          <span class="material-icons productList__item__button__icon">shopping_cart</span>
        </a>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.productList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  line-height: 1.5;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }

  &__item {
    width: 49%;
    margin-bottom: 30px;

    @media (min-width: 1024px) {
      width: 24%;
      margin-bottom: 58px;

      &:not(:nth-child(4n)) {
        margin-right: 1.33%;
      }
    }

    &__img {
      max-width: 100%;
      display: block;
      margin-bottom: 2px;
    }

    &__title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 2px;
    }

    &__category {
      color: #000000;
      text-decoration: none;
      transition: opacity .3s;

      &:hover {
        opacity: .5;
      }
    }

    &__price {
      display: flex;
      align-items: center;
      gap: 8px;

      &--origin {
        color: #8D8D8D;
        text-decoration: line-through;
      }
    }

    &__button {
      display: flex;
      align-items: center;
      gap: 11px;

      &__icon {
        color: #916019;
        opacity: 1;
        transition: opacity .3s;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
