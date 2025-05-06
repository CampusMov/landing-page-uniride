<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const width = ref(window.innerWidth)

const updateSize = () => {
  width.value = window.innerWidth

}

onMounted(() => {
  window.addEventListener('resize', updateSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSize)
})

</script>

<template>
  <section class="grid">
    <div class="flex align-items-center justify-content-center col-12 md:col-6" v-if="width > 766">
      <div class="card">


      </div>

    </div>
    <div class="col-12 md:col-6 flex flex-column gap-3 p-5">
      <div class="flex justify-content-center align-items-center">
        <h2>What is UniRide?</h2>
      </div>
      <div class="pr-8 font-bold">

        <p>Discover UniRide, the app that connects students and reduces your daily expenses.</p>
      </div>
      <div class="pl-8">
        <p>Designed for those who are looking for a more intelligent way to mobilize, UNIRIDE is a mobile app that faces the challenges of university transport on three fronts.</p>
      </div>
      <div class="pr-8 font-bold">
        <ul class="list-inside pl-4">
          <li><p>Saving.</p></li>
          <li><p>Security</p></li>
          <li><p>Community</p></li>
        </ul>
      </div>
    </div>

    <div class="col-12 p-5">
      <div class="flex justify-content-center align-items-center">
        <h2>Challenges we approach</h2>
      </div>

      <div class="flex justify-content-center align-items-center gap-5 p-5 md:flex-row flex-column">
        <div class="card-challenges flex flex-column p-5 gap-5 align-items-center justify-content-center">
          <h2 style="color: #525252;">Saving</h2>
          <p  class="text-center">Sharing trips between students</p>
        </div>
        <div class="card-challenges flex flex-column p-5 gap-5 align-items-center justify-content-center">
          <h2 style="color: #525252">Security</h2>
          <p  class="text-center">Create a confidence network between colleagues</p>
        </div>
        <div class="card-challenges flex flex-column p-5 gap-5 align-items-center justify-content-center">
          <h2 style="color: #525252">Community</h2>
          <p  class="text-center">Strengthens the connection between students through shared trips and common experiences</p>

        </div>
      </div>

    </div>

  </section>
</template>

<style scoped>
.card-challenges{
  width: 17.1875rem;
  height: 17.25rem;
  border-radius: 1.25rem;
  background: #FFD166;

}
.card{
  width: 70%;
  height: 18rem;
  border-radius: 1rem;
  background: linear-gradient(180deg, #FFD166 0%, #F5F5F5 100%);
}

h2{
  color: #05B295;
}

p{
  color: #525252;
}

</style>