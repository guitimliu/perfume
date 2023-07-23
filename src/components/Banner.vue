<script setup>
</script>

<template>
  <div class="banner">
    <div class="banner__content">
      <h1 class="banner__title">Perfume your day</h1>
      <p class="banner__desc">A perfume is like a piece of clothing, a message, a way of presenting oneself a costume that according to the person who wears it.</p>
      <router-link to="/perfume/productList">
        <button class="banner__button" type="button">
          Shop now
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  max-width: 100%;
  height: 480px;
  background-image: url(../assets/img/index1.jpg);
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  line-height: 1.5;
  position: relative;
  padding: 0 15px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
  }

  &__content {
    max-width: 100%;

    @media (min-width: 768px) {
      max-width: 445px;
      position: absolute;
      left: 50%;
      padding: 0 15px;
    }

    @media (min-width: 1024px) {
      padding: 0;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: bold;
  }

  &__desc {
    font-size: 20px;
    margin-bottom: 16px;
  }

  &__button {
    max-width: 100%;
    width: 100%;
    font-size: 28px;
    border: 1px solid #fff;
    border-radius: 30px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    padding: 13px 0;
    transition: all .3s;

    &:hover, &:active {
      background-color: #fff;
      color: #916000;
    }
  }

  @media (min-width: 1024px) {
    height: 870px;
  }
}
</style>
