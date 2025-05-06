<script setup>
import {ref} from "vue";

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
          src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/40/66/d1/4066d1a4-847f-199e-db83-223ae43c9d36/AppIcon-1x_U007emarketing-0-10-0-sRGB-85-220-0.png/1200x600wa.png"
          alt="logo"
          style="width: 100px">
    </template>

    <template #options = "{option,props,hasSubmenu,root}">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span>{{option.label}}</span>
      </a>

    </template>
    <template>

    </template>

  </pv-menubar>

</template>

<style scoped>

</style>