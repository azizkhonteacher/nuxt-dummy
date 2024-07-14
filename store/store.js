import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const count = ref(0);
  const cart = ref([]);
    typeof window == "object"
      ? localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
      : [];
  return {
    count,
    cart,
  };
});
