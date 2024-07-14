<template>
  <div class="star-rating">
    <span class="star" v-for="i in 5" :key="i">
      <svg
        width="25"
        height="25"
        viewBox="0 0 23 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5375 0L14.1278 7.9463H22.5103L15.7287 12.8574L18.3191 20.8037L11.5375 15.8926L4.75593 20.8037L7.34626 12.8574L0.564686 7.9463H8.94717L11.5375 0Z"
          fill="#C4C4C4"
        />
      </svg>
    </span>
    <div class="star-rating__colored" :style="ratingWidthStyle">
      <span class="star" v-for="i in 5" :key="i">
        <svg
          width="25"
          height="25"
          viewBox="0 0 23 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5375 0L14.1278 7.9463H22.5103L15.7287 12.8574L18.3191 20.8037L11.5375 15.8926L4.75593 20.8037L7.34626 12.8574L0.564686 7.9463H8.94717L11.5375 0Z"
            fill="gold"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["rating"]);
const Rating = ref(props?.rating);
const ratingWidthStyle = `width; ${(Rating.value / 5) * 100}%`;
</script>

<style lang="scss" scoped>
.star {
  display: inline-block;
  width: 25px;
  height: 25px;
  //   margin: 0 3px;
  flex-shrink: 0;
}
.star-rating {
  position: relative;
  display: inline-flex;
  &__colored {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}
</style>
