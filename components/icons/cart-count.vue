<template>
    <div class="product-count">
        <button @click="remCountProduct(item)" class="cart-count">-</button>
          <span>{{productCart?.quantity}}</span>
          <button @click="addCountProduct(item)" class="cart-count">+</button>
    </div>
</template>

<script setup>
import { useStore } from "~/store/store";

import { addCountProduct } from '~/composables/addCountProduct';
import { remCountProduct } from '~/composables/remCountProduct';

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
const productCart = computed(() => {
  const item = store.cart.find((el) => el.id == product.id);
  if (item) {
    return item;
  } else {
    return false;
  }
});

</script>

<style lang="scss" scoped>

</style>