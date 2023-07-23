<script setup>
import { ref } from 'vue'

const currentPage = ref(1);
</script>

<template>
  <ul class="pagination">
    <li v-for="i in 3" :key="i" class="pagination__item">
      <a
        class="pagination__item__link"
        :class="{'active': currentPage == i}"
        @click.prevent="currentPage = i"
      >
        {{ i }}
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &__item {
    font-size: 20px;

    &__link {
      text-decoration: none;
      color: #000;
      cursor: pointer;
    }

    .active {
      color: #AC8A46;
      text-decoration: underline;
    }
  }
}
</style>
