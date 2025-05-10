<script setup>

</script>

<template>

  <section class="flex flex-column p-3 w-full gap-3 ">
    <div class="  flex flex-column  justify-content-center align-items-center">

      <div class=" flex md:flex-row flex-column flex-wrap md:w-10 justify-content-center align-items-center">
        <div class="flex flex-column justify-content-center align-items-center gap-3 p-5 md:w-30rem">
          <h1>UniRide</h1>
          <h2 class="text-center" >{{$t("Home.Slogan")}}</h2>
          <p class="text-center">{{$t("Home.Subtitle")}}</p>
        </div>

        <div class="flex flex-column align-items-center justify-content-center">
          <div class="phone">
            <div class="pantalla"></div>
          </div>
          <div class="btns-call-to-action flex md:flex-row flex-column justify-content-center align-items-center gap-2 p-2 md: w-22rem ">
            <img src="../assets/GetItOnGooglePlay_Badge_Web_color_Spanish-LATAM.png" class="w-full md:w-auto h-auto max-w-10rem"/>
            <img src="../assets/download-on-the-app-store.svg" class="w-full md:w-auto h-auto max-w-10rem"/>
          </div>
        </div>

      </div>

      <div class="flex justify-content-center align-items-center w-12">

        <div class="skill-container flex flex-column md:flex-row md:justify-content-around align-items-center p-5 gap-3">
          <div class="flex flex-column align-items-center gap-2">
            <i class="pi pi-wallet text-6xl"></i>
            <p style="font-weight: bold">{{$t("Points.1")}}</p>
          </div>

          <div class="flex flex-column align-items-center gap-2 ">
            <i class="pi pi-map text-6xl"></i>
            <p style="font-weight: bold">{{$t("Points.2")}}</p>
          </div>

          <div class="flex flex-column align-items-center gap-2">
            <i class="pi pi-graduation-cap text-6xl"></i>
            <p style="font-weight: bold">{{$t("Points.3")}}</p>
          </div>

        </div>
      </div>
    </div>
  </section>


</template>

<style scoped>

.skill-container {
  width: 100%;
  max-height: 100%;
  max-width: 72.5rem;
  min-height: 13.25rem;
  border-radius: 1rem;
  background: #FFD166;
}


.btns-call-to-action{
  max-width: 450px;
  width: 100%;

  max-height: 200px;
  /*height: 91px;*/

  border-radius: 20px;
  background: #FFD166;

  position: relative;
  top: -1rem;
}

.pantalla{
  width: 276.875px;
  height: 389px;

  border-radius: 20px 20px 0px 0px;
  background: #EAEAEA;

  box-shadow: 0px 0px 0.5px 0.5px rgba(255, 255, 255, 0.60), 0px 0px 4px 2px rgba(0, 0, 0, 0.10) inset;
}
.phone{
  width: 287.943px;
  height: 409.158px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 22px 22px 0px 0px;
  border: 1px solid #302C2C;

  background: #2A2727;
}

h1{
color: #05B295;
}
h2{
  color: #FFD166;

}
p{
  color: #525252;
}

</style>