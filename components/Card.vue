<template>
  <div>
    <div class="card">
      <div class="card-img">
        <button class="card-like-btn">
          <svg
            enable-background="new 0 0 50 50"
            height="50px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 50 50"
            width="50px"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect fill="none" height="50" width="50" />
            <path
              d="M35,8  c-4.176,0-7.851,2.136-10,5.373C22.851,10.136,19.176,8,15,8C8.373,8,3,13.373,3,20c0,14,16,21,22,26c6-5,22-12,22-26  C47,13.373,41.627,8,35,8z"
              fill="none"
              stroke="#C2C6D1"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="4"
            />
          </svg>
        </button>

        <img :src="product?.thumbnail" alt="img" />
      </div>

      <NuxtLink :to="`/product/${product?.id}`" class="card-title c-lr-padding">
        <h2 class="card-title-text">{{ product?.title }}</h2>
      </NuxtLink>

      <div class="card-brand c-lr-padding">
        <p class="rating">{{ product?.rating }}</p>
        <p class="brand">{{ product?.brand }}</p>
      </div>

      <div class="card-price c-lr-padding">
        <p class="price">{{ product?.price }}$</p>
      </div>

      <!-- cart tayyor emas -->
      <div class="card-cart">
        <button
        v-if="!productCart"
          :class="{ 'active-cart': checkSaved }"
          class="cart-btn card-btns"
          @click="addToCart(item)"
        >
          <svg
            class="feather feather-shopping-cart"
            fill="none"
            height="24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="21" r="1" stroke="#4f46e5" fill="#4f46e5" />
            <circle cx="20" cy="21" r="1" stroke="#4f46e5" fill="#4f46e5" />
            <path
              stroke="#4f46e5"
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
            />
          </svg>
        </button>
        <div class="card-btns" v-else>
          <cartCount :product="product"/>
          <!-- <div  class="product-count">
            <button @click="remCountProduct(item)" class="cart-count">-</button>
            <span>{{ productCart?.quantity }}</span>
            <button @click="addCountProduct(item)" class="cart-count">+</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";

import { addToCart } from "~/composables/addToCart";
import cartCount from "./icons/cart-count.vue";

const store = useStore();
const { product } = defineProps(["product"]);

// card product ichiga kiramiz
// productni return qilib yubordim
const item = computed(() => {
  const item = {
    title: product?.title,
    thumbnail: product?.thumbnail,
    category: product?.category,
    price: product?.price,
    id: product?.id,
    quantity: 1,
  };
  return item;
});

// korzina bosilganda
const checkSaved = computed(() => {
  const item = store.cart.find((el) => el.id == product.id);
  if (item) {
    return true;
  } else {
    return false;
  }
});

// productni sonini aniqlab olib beradi
const productCart = computed(() => {
  const item = store.cart.find((el) => el.id == product.id);
  if (item) {
    return item;
  } else {
    return false;
  }
});
</script>

<style lang="scss" scoped></style>
