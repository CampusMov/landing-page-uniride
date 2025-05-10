<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
<section class="flex flex-column p-3 w-full gap-3 ">
  <div class="flex justify-content-center align-content-center">
    <h2>{{ $t("NavBar.About-us") }}</h2>
  </div>
  <div class="flex justify-content-center align-content-center w-full">
    <iframe class="w-7 h-30rem" src="https://www.youtube.com/embed/iEDbY5mNlKE?si=ssbRy9kp83sfZwvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</section>
</template>

<style scoped>
h2{
  color: #05B295;
}

</style>