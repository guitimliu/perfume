<script setup>
</script>

<template>
  <div class="productDisplay">
    <img src="../assets/img/index9.jpg" alt="Bottle-Recycling" class="productDisplay__img">
    <div class="productDisplay__content">
      <h2 class="productDisplay__title">
        Bottle-Recycling
      </h2>
      <p class="productDisplay__desc">
        Recycle your used empty bottles and be rewarded!
      </p>
      <p class="productDisplay__desc">
        For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.For the past 10 years, we have collected over 800,000 bottles through Empty Bottle Recycling Campaign and planted more than 860 pine trees for a better environment.
      </p>
      <a href="#" class="productDisplay__link">
        查看更多
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.productDisplay {
  margin-bottom: 40px;
  line-height: 1.5;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__img {
    max-width: 100%;
    display: block;
    margin-bottom: 8px;

    @media (min-width: 1024px) {
      width: 730px;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: bold;
  }

  &__desc {
    margin-bottom: 8px;

    @media (min-width: 1024px) {
      margin-bottom: 16px;
    }
  }

  &__link {
    color: #AC8A46;
    text-decoration: none;
    transition: opacity .3s;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
