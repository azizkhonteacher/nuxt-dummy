<template>
  <main>
    <div class="cards">
      <div class="container">
        <h2 class="category">Like Products</h2>

        <div class="card-wrapper" v-if="store.like?.length">
          <Card v-for="item in store.like" :key="item" :product="item" />
        </div>
        <div v-if="!store.like?.length" class="cart-modal">
          <h2 class="cart-modal-title">No products to like!</h2>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useStore } from "~/store/store";

const store = useStore();
</script>

<style lang="scss" scoped></style>
