<script setup>
</script>

<template>
  <div class="productDisplayList">
    <div class="container">
      <ul class="productDisplayList__list">
        <li v-for="i in 3" :key="i" class="productDisplayList__item">
          <router-link to="#" class="productDisplayList__link">
            <img src="../assets/img/index6.jpg" alt="Poppy & Barley" class="productDisplayList__item__img">
            <h2 class="productDisplayList__item__title">
              Poppy & Barley
            </h2>
            <p class="productDisplayList__item__category">
              Jo Malone
            </p>
            <div class="productDisplayList__item__price">
              <p class="productDisplayList__item__price--actual">
                NT$1,380
              </p>
              <p class="productDisplayList__item__price--origin">
                NT$1,580
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.productDisplayList {
  background-color: #E0E0E0;
  padding: 32px 16px 36px 15px;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    margin-bottom: 60px;
  }

  &__list {
    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      gap: 30px;
    }
  }

  &__item {
    line-height: 1.5;
    margin-bottom: 32px;
    transition: transform .3s;

    &:hover {
      transform: translateY(-10px);
    }

    @media (min-width: 1024px) {
      padding: 40px 0;
    }

    @media (min-width: 1024px) {
      width: 33%;
      margin-bottom: 0;
    }

    &__img {
      max-width: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 350px;
      margin-bottom: 8px;

      @media (min-width: 1024px) {
        height: 540px;
      }
    }

    &__title {
      font-size: 24px;
      font-weight: bold;
    }

    &__category {
      margin-bottom: 4px;
    }

    &__price {
      display: flex;
      align-items: center;
      gap: 6px;

      &--origin {
        color: #8D8D8D;
        text-decoration: line-through;
      }
    }
  }

  &__link {
    text-decoration: none;
    color: #000;
  }
}
</style>
