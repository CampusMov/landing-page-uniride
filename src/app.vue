<script setup>
import NavBar from '/src/components/nav-bar.component.vue'

import Home from '/src/components/home.component.vue'
import Product from './components/product.component.vue'
import Benefits from "./components/benefits.component.vue";
import FooterComponent from "./public/components/footer.component.vue";

import FAQ from "./components/faq.component.vue";
import AboutUs from "./components/about-us.component.vue";
</script>

<template>

  <NavBar></NavBar>
  <div class="spacer"/>

  <Home></Home>
  <Product></Product>
  <Benefits></Benefits>
  <AboutUs/>

  <FAQ></FAQ>


  <FooterComponent></FooterComponent>


</template>

<style scoped>
.spacer{
  height: 100px;
}

</style>
