<template>
  <div>
    <main>
      <div class="cards">
        <div class="container">
          <h2 class="category">Selected Products</h2>

          <div class="card-wrapper" v-if="store.cart?.length">
            <Card v-for="item in store.cart" :key="item" :product="item" />
          </div>

          <div v-if="!store.cart?.length" class="cart-modal">
            <h2 class="cart-modal-title">There are no products in the cart!</h2>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
const store = useStore();
</script>

<style lang="scss" scoped></style>
