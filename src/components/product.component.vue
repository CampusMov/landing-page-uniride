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
  <section class="flex flex-column p-3 w-full gap-3">
    <div class="flex md:flex-row flex-column justify-content-center align-content-center gap-8">

      <div class="flex align-items-center justify-content-center" v-if="width > 766">
        <img class="card"  src="../assets/ride-6325906_1280.webp">
      </div>

      <div class="flex flex-column align-content-centerl gap-3 p-5 md:w-30rem">
        <div class="flex justify-content-center align-items-center" >
          <h2>{{$t('UniRide.What')}}</h2>
        </div>

        <div class="pr-8">
          <p class="subtitle">{{$t('UniRide.Discover')}} </p>
        </div>

        <div class="pl-8">
          <p>{{ $t('UniRide.Designed') }}</p>
        </div>

        <div class=" ">
          <ul class="list-inside pl-4">
            <li><p>{{ $t('UniRide.Ul1') }}</p></li>
            <li><p>{{ $t('UniRide.Ul2') }}</p></li>
            <li><p>{{ $t('UniRide.Ul3') }}</p></li>
          </ul>
        </div>
      </div>

    </div>
    <div class=" flex flex-column justify-content-center align-items-center p-2 md:p-5">
      <div class="flex justify-content-center align-items-center">
        <h2 >{{$t('Challenges.desc')}}</h2>
      </div>


      <div class="flex justify-content-center align-items-center gap-5 p-5 md:flex-row flex-column">
        <div  class="card-challenges flex flex-column p-4 gap-5 align-items-center justify-content-center">
          <h2 style="color: #525252;">{{$t('Challenges.1')}}</h2>
          <p class="text-center">{{$t('Challenges.1-1')}}</p>
        </div>
        <div class="card-challenges flex flex-column p-5 gap-5 align-items-center justify-content-center">
          <h2 style="color: #525252;" >{{$t('Challenges.2')}}</h2>
          <p  class="text-center">{{$t('Challenges.2-1')}}</p>
        </div>
        <div class="card-challenges flex flex-column p-5 gap-5 align-items-center justify-content-center">
          <h2 style="color: #525252;">{{$t('Challenges.3')}}</h2>
          <p class="text-center">{{$t('Challenges.3-1')}}</p>
        </div>
      </div>

    </div >

  </section>
</template>

<style scoped>
.subtitle{
  font-weight: bold;
}
.card-challenges{
  width: 17.1875rem;
  height: 17.25rem;
  border-radius: 1.25rem;
  background: #FFD166;

}
.card{
  width: 100%;
  height: 18rem;
  border-radius: 1rem;
  //background: linear-gradient(180deg, #FFD166 0%, #F5F5F5 100%);
}



h2{
  color: #05B295;
}

p{
  color: #525252;
}

</style>