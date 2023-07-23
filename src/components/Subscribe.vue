<script setup>
</script>

<template>
  <div class="subscribe">
    <div class="subscribe__content container">
      <h2 class="subscribe__title">
        記得<br>訂閱以獲取更多資訊！
      </h2>
      <form class="subscribe__fields">
        <input class="subscribe__input" type="email" placeholder="Your email address">
        <input class="subscribe__button" type="submit" value="Subscribe">
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subscribe {
  max-width: 100%;
  height: 600px;
  background-image: url(../assets/img/index10.jpg);
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: end;
  color: #fff;
  line-height: 1.5;

  &__content {
    width: 100%;
    margin-bottom: 112px;

    @media (min-width: 768px) {
      padding: 0 15px;
    }

    @media (min-width: 1024px) {
      padding: 0;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: bold;
    color: #8D8D8D;
    margin-bottom: 20px;
  }

  &__fields {
    display: flex;

    @media (min-width: 768px) {
      max-width: 350px;
    }
  }

  &__input {
    width: 70%;
    border: 2px solid #916000;
    padding: 21px 14.5px 20px;
  }

  &__button {
    width: 30%;
    border: 2px solid #916000;
    background-color: #916000;
    color: #fff;
    cursor: pointer;
    transition: all .3s;

    &:hover, &:active {
      background-color: #fff;
      color: #916000;
    }
  }
}
</style>
