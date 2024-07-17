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
            <StarRating :rating="rating" />
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
              <!-- cart ga qo'shishni to'g'irlash -->
              <button
                class="cart-btn card-btns"
                v-if="!productCart"
                :class="{ 'active-cart': checkSaved }"
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

              <div class="card-btns" v-else>
                <cartCount :product="detail" />
              </div>
            </div>

            <!-- like btn -->
            <button
              class="like-active-btn active-btn"
              @click="addToLike(like)"
              :class="{ 'like-active': checkLike }"
            >
              <svg
                enable-background="new 0 0 50 50"
                widths="50px"
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
                  fill="#C2C6D1"
                  stroke="#C2C6D1"
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
import { useStore } from "~/store/store";
import { addToCart } from "~/composables/addToCart";
import { addToLike } from "~/composables/addToLike";
import cartCount from "~/components/icons/cart-count.vue";

const store = useStore();
const route = useRoute();
const detail = ref({});
async function getDetail() {
  const res = await services.getDetailProduct(route.params.id);
  detail.value = res;
}
getDetail();
const rating = computed(() => {
  return detail.value?.rating;
});

const like = computed(() => {
  const item = {
    title: detail.value?.title,
    thumbnail: detail.value?.thumbnail,
    category: detail.value?.category,
    price: detail.value?.price,
    rating: detail?.rating,
    brand: detail?.brand,
    id: detail.value?.id,
  };
  return item;
});

const checkLike = computed(() => {
  const item = store.like.find((el) => el.id == detail.value.id);
  if (item) {
    return true;
  } else {
    return false;
  }
});

const item = computed(() => {
  const item = {
    title: detail.value?.title,
    thumbnail: detail.value?.thumbnail,
    category: detail.value?.category,
    price: detail.value?.price,
    id: detail.value?.id,
    quantity: 1,
  };
  return item;
});

const checkSaved = computed(() => {
  const item = store.cart.find((el) => el.id == detail.value?.id);
  if (item) {
    return true;
  } else {
    return false;
  }
});

const productCart = computed(() => {
  const item = store.cart.find((el) => el.id == detail.value?.id);
  if (item) {
    return item;
  } else {
    return false;
  }
});
</script>

<style lang="scss" scoped></style>
