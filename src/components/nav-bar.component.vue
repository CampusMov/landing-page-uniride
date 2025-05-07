<script setup>
import {ref} from "vue";
import LanguageSwitcher from "../public/components/language-switcher.component.vue";

const options = ref([
  { label: "Inicio" },
  { label: "Producto" },
  { label: "Beneficios" },
  { label: "Nosotros" },
  { label: "Testimonios" },
  { label: "FAQ" }
])

</script>

<template>
  <pv-menubar :model="options">
    <template #start>
      <img
          src="https://raw.githubusercontent.com/CampusMov/Report/refs/heads/feature/style-guidelines-%26-information-architecture/assets/product-design/general%20styles/Logo.png"
          alt="logo"
          style="width: 4rem;height: 4rem;border-radius:20px">
    </template>

    <template #options = "{option,props,hasSubmenu,root}">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span>{{option.label}}</span>
      </a>

    </template>
    <template #end>
    <language-switcher/>
    </template>

  </pv-menubar>

</template>

<style scoped>

</style>