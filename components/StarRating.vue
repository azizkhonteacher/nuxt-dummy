<template>
  <div class="rating">
    <span
      v-for="i in 5"
      :key="i"
      class="star"
      :class="{ full: rating >= i, half: rating >= i - 0.5 && rating < i }"
      :data-value="i"
    ></span>
  </div>
</template>

<script setup>
const { rating } = defineProps(["rating"]);
</script>

<style lang="scss" scoped>
.star {
  width: 20px;
  height: 20px;
  background-color: gray;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.star.full {
  background-color: gold;
}

.star.half {
  background: linear-gradient(to right, gold 50%, gray 50%);
}
.rating {
  display: flex;
  direction: row-reverse;
  justify-content: flex-start;
  position: relative;
  width: 100px; /* Adjust width as needed */
  height: 20px; /* Adjust height as needed */
}
</style>
