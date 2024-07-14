<template>
  <main>
    <div class="cards">
      <div class="container">
        <h2 class="category">Products</h2>

        <div class="card-wrapper">
          <Card
            v-for="item in products?.products"
            :key="item"
            :product="item"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
