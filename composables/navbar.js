import { ref } from "vue";

export const isOpen = ref(false); // De state blijft behouden

export function toggleMenu() {
  isOpen.value = !isOpen.value;
}

export default {
    setup() {
      return { isOpen, toggleMenu };
    },
  };