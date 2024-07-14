<template>
  <div>
    <main>
      <div class="cards">
        <div class="container">
          <h2 class="category">Products</h2>

          <div class="card-wrapper">
            <Card v-for="item in products?.products" :key="item" :product="item" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useStore } from "~/store/store";
import services from "~/services/services";

const store = useStore();
const products = ref({});

async function getProducts() {
  const res = await services.getProducts();
  products.value = res;
}
getProducts();
</script>

<style lang="scss" scoped></style>
