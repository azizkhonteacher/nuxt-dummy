<template>
  <div class="product">
    <div class="container">
      <NuxtLink
        :to="`/categorys/${detail?.category}`"
        class="product-category"
        >{{ detail?.category }}</NuxtLink
      >

      <div class="product-wrapper">
        <div class="product-img-price">
          <div class="product-img">
            <img :src="detail?.thumbnail" alt="img" />
          </div>
        </div>

        <div class="product-info">
          <div class="product-title">
            <h2 class="product-title-text">{{ detail?.title }}</h2>
          </div>
          <div class="product-rating-wrapper">
            <!-- bu yerini tuzatish kerak -->
            <StarRating :rating="detail?.rating" />
            <p class="rating-reviews">
              ({{ detail?.reviews?.length }} Reviews)
            </p>
            <span class="sp"></span>
            <div class="product-brand">
              <p class="brand">{{ detail?.brand }}</p>
            </div>
          </div>
          <div class="product-price">
            <h2 class="product-price-text">${{ detail?.price }}</h2>
          </div>
          <div class="product-desc">
            <p class="text">{{ detail?.description }}</p>
          </div>

          <div class="product-active-btn">
            <div class="product-cart">
              <div class="product-count card-btns">
                <button class="cart-count">-</button>
                <span>87</span>
                <button class="cart-count">+</button>
              </div>

              <button class="cart-btn card-btns">
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
                  <circle
                    cx="9"
                    cy="21"
                    r="1"
                    stroke="#4f46e5"
                    fill="#4f46e5"
                  />
                  <circle
                    cx="20"
                    cy="21"
                    r="1"
                    stroke="#4f46e5"
                    fill="#4f46e5"
                  />
                  <path
                    stroke="#4f46e5"
                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                  />
                </svg>
              </button>
            </div>

            <button class="like-active-btn active-btn">
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
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import services from "~/services/services";
const route = useRoute();
const detail = ref({});
async function getDetail() {
  const res = await services.getDetailProduct(route.params.id);
  detail.value = res;
}
getDetail();
</script>

<style lang="scss" scoped></style>
