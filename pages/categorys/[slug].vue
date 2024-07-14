<template>
  <div>
    <main>
      <div class="cards">
        <div class="container">
          <h2 class="category">{{ slug }}</h2>

          <div class="card-wrapper">
            <Card
              v-for="item in detail?.products"
              :key="item"
              :product="item"
            />
          </div>
          <div class="card-add-more">
            <button role="button" @click="addProducts()" v-if="limit < detail?.total" class="button-71">more</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import services from "~/services/services";
import {useStore} from "~/store/store";
const store = useStore();
const { slug } = useRoute().params;


const detail = ref({});
const limit = ref(8);

const getDetail = async () => {
  const res = await services.getCategorysDetail(slug, limit.value);
  detail.value = res;
};
getDetail();

function addProducts() {
  if (limit.value < detail.value?.total) {
    limit.value += 4;
    getDetail();
  }
}
</script>

<style lang="scss" scoped></style>
