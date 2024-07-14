<template>
  <div>
    <header>
      <nav class="container">
        <div class="site-logo">
          <NuxtLink class="site-logo-link" to="/">
            <img src="@/assets/images/Site-Logo.png" alt="img" />
          </NuxtLink>
        </div>
        <div class="category">
          <ul class="category-list">
            <li class="category-list-link">
              <NuxtLink to="/" class="category-text">Home</NuxtLink>
            </li>
            <li class="category-list-link">
              <NuxtLink to="/about-view" class="category-text">About</NuxtLink>
            </li>
            <li class="category-list-link">
              <button
                class="category-list-btn"
                @click="
                  (showCategory = !showCategory), (showModal = !showModal)
                "
              >
                <span class="category-text">Category</span>
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z"
                  />
                  <path d="M0 0h48v48h-48z" fill="none" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div class="right-active-btns">
          <div class="header-search">
            <input type="text" placeholder="Search..." class="category-text"/>

            <!-- <ul v-show="searchResult.length" class="search-result-ul">
              <li v-for="item in searchResult" :key="item.id">
                <a class="search-result" href="#">{{ item.title }}</a>
              </li>
            </ul> -->
            <svg
              height="12px"
              id="Layer_1"
              style="enable-background: new 0 0 512 512"
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"
              />
            </svg>
          </div>
          <div class="active-btns">
            <NuxtLink to="/like" class="like-active-btn active-btn">
              <span class="active-btn-span">654</span>
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
            </NuxtLink>
            <NuxtLink to="/cart" class="cart-active-btn active-btn">
              <span class="active-btn-span">{{ cartCount }}</span>
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <rect fill="none" height="256" width="256" />
                <path
                  d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
                <circle
                  cx="80"
                  cy="204"
                  fill="none"
                  r="20"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
                <circle
                  cx="184"
                  cy="204"
                  fill="none"
                  r="20"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
                <path
                  d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
              </svg>
            </NuxtLink>
            <button
              class="burger-active-btn active-btn"
              @click="(showBurger = true), (showModal = true)"
            >
              <svg
                fill="none"
                height="28"
                viewBox="0 0 28 28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
                  fill="black"
                />
                <path
                  d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
                  fill="black"
                />
                <path
                  d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="media-burger" v-show="showBurger">
          <!-- close btn -->
          <div
            style="
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div class="site-logo">
              <NuxtLink class="site-logo-link" to="/">
                <img src="@/assets/images/Site-Logo.png" alt="img" />
              </NuxtLink>
            </div>
            <button
              class="close-btn active-btn"
              @click="(showBurger = false), (showModal = false)"
            >
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div class="active-btns">
            <NuxtLink to="/like" class="like-active-btn active-btn">
              <span class="active-btn-span">654</span>
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
            </NuxtLink>
            <NuxtLink to="/cart" class="cart-active-btn active-btn">
              <span class="active-btn-span">{{ cartCount }}</span>
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <rect fill="none" height="256" width="256" />
                <path
                  d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
                <circle
                  cx="80"
                  cy="204"
                  fill="none"
                  r="20"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
                <circle
                  cx="184"
                  cy="204"
                  fill="none"
                  r="20"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
                <path
                  d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="8"
                />
              </svg>
            </NuxtLink>
          </div>
          <!-- category -->
          <ul class="category-list">
            <li class="category-list-link">
              <NuxtLink to="/" class="category-text">Home</NuxtLink>
            </li>
            <li class="category-list-link">
              <NuxtLink to="/about-view" class="category-text">About</NuxtLink>
            </li>
            <li class="category-list-link">
              <button
                class="category-list-btn"
                @click="showCategoryBurger = !showCategoryBurger"
              >
                <span class="category-text">Category</span>
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.17 17.17l-9.17 9.17-9.17-9.17-2.83 2.83 12 12 12-12z"
                  />
                  <path d="M0 0h48v48h-48z" fill="none" />
                </svg>
              </button>
            </li>
            <!-- categories -->
            <ul class="categories-list" v-show="showCategoryBurger">
              <li v-for="item in categorys" :key="item">
                <NuxtLink
                  @click="
                    (showModal = false),
                      (showBurger = false),
                      (showCategoryBurger = false)
                  "
                  :to="`/categorys/${item?.slug}`"
                  class="categories-list-link"
                  >{{ item?.name }}</NuxtLink
                >
              </li>
            </ul>
          </ul>
        </div>

        <!-- category btn bosilganda chiqadigan categoriyalar mediasiz -->
        <div class="categories" v-show="showCategory">
          <ul class="categories-list">
            <li v-for="item in categorys" :key="item">
              <NuxtLink
                @click="(showModal = false), (showCategory = false)"
                :to="`/categorys/${item?.slug}`"
                class="categories-list-link"
                >{{ item?.name }}</NuxtLink
              >
            </li>
          </ul>
        </div>

        <Modal
          v-show="showModal"
          @click="
            (showModal = false),
              (showCategory = false),
              (showCategoryBurger = false),
              (showBurger = false)
          "
        />
      </nav>
    </header>

    <NuxtPage />

    <footer>
     
    </footer>
  </div>
</template>

<script setup>
import Modal from "~/components/Modal.vue";
// BTN lar bosilgandagi holatlari
const showModal = ref(false);
const showCategory = ref(false);
const showCategoryBurger = ref(false);
const showBurger = ref(false);

import { useStore } from "~/store/store";
import services from "~/services/services";
const store = useStore();

// cart soni
const cartCount = computed(() => {
  let count = 0;
  store.cart.forEach((el) => {
    count += el.quantity;
  });
  return count;
});

const categorys = ref({});
const getCategorys = async () => {
  const res = await services.getCategorys();
  categorys.value = res;
};
getCategorys();

// search
// let search = ref("")
// const searchResult = ref([])
// const getSearch = async () => {
//   const res = await fetch('https://dummyjson.com/products/search?q=', {
//     method: "POST",
//     body: JSON.stringify({
//       search: search.value,
//     }),
//   });
//   const data = await res.json();
//   searchResult.value = data.products;
// };
// v-model="search" @input="getSearch"
</script>

<style lang="scss" scoped></style>
