<script setup>
</script>

<template>
  <ul class="productFeature">
    <li v-for="i in 3" :key="i" class="productFeature__item">
      <img src="../assets/img/index2.jpg" alt="Gabrielle CHANEL" class="productFeature__item__img">
      <div class="productFeature__item__content">
        <h2 class="productFeature__item__title">
          Gabrielle CHANEL
        </h2>
        <p class="productFeature__item__desc">
          全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。 極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
        </p>
        <a href="#" class="productFeature__item__link">
          查看更多
        </a>
      </div>
    </li>
    <li class="productFeature__item -list">
      <img src="../assets/img/index5.jpg" alt="Gabrielle CHANEL" class="productFeature__item__img">
      <div class="productFeature__item__content">
        <ul v-for="i in 3" :key="i" class="productFeature__item__list">
          <h2 class="productFeature__item__list__title">
            <span class="productFeature__item__list__number">{{ i }}.</span>
            Levels of Preventive Maintenance Compliance
          </h2>
          <p class="productFeature__item__list__desc">
            The core idea of preventative maintenance is the performance of proactive actions against unscheduled downtime in order to identify potential defects before they evolve into something more severe.
          </p>
        </ul>
        <a href="#" class="productFeature__item__list__button">
          Plan a free online training
        </a>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.productFeature {
  line-height: 1.5;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
    padding: 0 15px;
  }

  @media (min-width: 1200px) {
    padding: 0;
  }

  &__item {
    margin-bottom: 32px;

    @media (min-width: 1024px) {
      display: flex;
      margin-bottom: 0;

      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
    }

    &__img {
      max-width: 100%;
      display: block;
      margin-bottom: 8px;
      object-fit: cover;

      @media (min-width: 1024px) {
        min-width: 555px;
        height: 555px;
        margin-bottom: 0;
      }
    }

    &__content {
      @media (min-width: 1024px) {
        max-width: 350px;
        margin: auto;
      }
    }

    &__title {
      font-size: 32px;
      font-weight: bold;
    }

    &__desc {
      font-size: 20px;
      margin-bottom: 8px;

      @media (min-width: 768px) {
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

    &__list {
      margin-bottom: 20px;

      @media (min-width: 768px) {
        margin-bottom: 52px;
      }

      &__number {
        display: block;
      }

      &__title {
        font-size: 24px;
        margin-bottom: 4px;
        font-weight: bold;
      }

      &__button {
        display: block;
        width: 100%;
        font-size: 20px;
        text-align: center;
        text-decoration: none;
        padding: 18px 0;
        outline: 1px solid #000;
        border-radius: 30px;
        color: #000;
        opacity: 1;
        transition: opacity .3s;

        &:hover {
          opacity: 0.5;
        }
      }
    }

    &.-list {
      height: 100%;
      .productFeature__item {
        align-items: stretch;

        &__img {
          max-width: 555px;
          height: 100%;
          max-height: 100%;
        }

        &__content {
          margin-top: 92px;
          margin-bottom: 92px;
        }
      }
    }
  }
}
</style>
