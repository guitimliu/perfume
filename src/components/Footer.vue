<script setup>
</script>

<template>
  <div class="footer">
    <div class="footer__main container">
      <div class="footer__info">
        <img src="../assets/img/d’Perfumewhite@2x.png" alt="香水電商" class="footer__info__img">
        <p class="footer__info__copyright">
          © 2020. All Rights Reserved.
        </p>
      </div>
      <ul class="footer__menu">
        <li>
          <a href="#" class="footer__menu__link">Product</a>
        </li>
        <li>
          <a href="#" class="footer__menu__link">Blog</a>
        </li>
        <li>
          <a href="#" class="footer__menu__link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  // max-width: 100%;
  background-color: #916000;
  color: #FFFFFF;
  padding: 21px 0;

  @media (min-width: 768px) {
    padding: 20px 0;
  }

  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &__img {
      width: 128px;
      height: 38px;
    }

    @media (min-width: 768px) {
      justify-content: flex-start;
      gap: 20px;
    }
  }

  &__menu {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 36px;
    }

    &__link {
      color: #FFFFFF;
      text-decoration: none;
      opacity: 1;
      transition: opacity .3s;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
