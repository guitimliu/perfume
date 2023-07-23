<script setup>
</script>

<template>
  <div class="header container">
    <a href="/perfume" class="header__logo">
      <img src="../assets/img/d’Perfume@2x.png" alt="香水電商">
    </a>
    <div class="header__nav--mobile">
      <div class="header__nav--mobile__order">
        <span class="header__nav--mobile__order__notice">3</span>
        <router-link class="header__nav--mobile__order__link" to="#">
          <span class="material-icons">shopping_cart</span>
        </router-link>
        <!-- <span style="display: block; width: 20px; height: 20px; background-color: #000;"></span> -->
      </div>
      <router-link class="header__nav--mobile__menu" to="#">
        <span class="material-icons">menu</span>
      </router-link>
    </div>
    <ul class="header__nav--desktop">
      <li>
        <router-link class="header__nav__link" to="/perfume/productList">
          <span class="material-icons">store</span>
          Product
        </router-link>
      </li>
      <li>
        <router-link class="header__nav__link" to="#">
          <span class="material-icons">person</span>
          log in
        </router-link>
      </li>
      <li>
        <router-link class="header__nav__link" to="#">
          <span class="material-icons">favorite</span>
          Wishlist
        </router-link>
      </li>
      <li>
        <router-link class="header__nav__link" to="#">
          <span class="material-icons">shopping_cart</span>
          Cart(3)
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 15px;

  @media (min-width:1200px) {
    padding: 9px 0px;
  }

  &__logo img {
    width: 128px;
    height: 38px;
    opacity: 1;
    transition: opacity .3s;

    &:hover {
      opacity: 0.7;
    }
  }

  &__nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &__link {
      display: flex;
      align-items: center;
      color: #8D8D8D;
      text-decoration: none;
      opacity: 1;
      transition: opacity .3s;

      &:hover {
        opacity: 0.8; 
      }
    }

    &--mobile {
      display: flex;
      align-items: center;
      gap: 20px;

      @media (min-width: 768px) {
        display: none;
      }

      &__order {
        position: relative;
        opacity: 1;
        transition: opacity .3s;

        &:hover {
          opacity: 0.7;
        }

        &__notice {
          position: absolute;
          top: -5px;
          right: -8px;
          text-align: center;
          line-height: 13px;
          width: 16px;
          height: 13px;
          background-color: #916000;
          color: #fff;
          border-radius: 7px;
          font-size: 12px;
        }

        &__link {
          text-decoration: none;
          color: #8D8D8D;
        }
      }

      &__menu {
        text-decoration: none;
        color: #8D8D8D;
        opacity: 1;
        transition: opacity .3s;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    &--desktop {
      gap: 24px;
      display: none;

      @media (min-width: 768px) {
        display: flex;
      }
    }
  }
}
</style>
