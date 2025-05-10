<script setup>
import { useI18n } from "vue-i18n";
import {computed} from "vue";
const { t } = useI18n();

const benefits = computed(()=>
    [
      { subtitle1: t("Benefits.Title"),
        subtitle2: t("Benefits.Comodity"),
        paragraph: t("Benefits.CDesc"),
        img: "/mundo.png"
      },
      { subtitle1: t("Benefits.Title"),
        subtitle2: t("Benefits.Comodity"),
        paragraph: t("Benefits.CDesc"),
        img: "/calendario.webp"
      },
      { subtitle1: t("Benefits.Title"),
        subtitle2: t("Benefits.Comodity"),
        paragraph: t("Benefits.CDesc"),
        img: "/celular.png"
      },
      { subtitle1: t("Benefits.Title"),
        subtitle2: t("Benefits.Comodity"),
        paragraph: t("Benefits.CDesc"),
        img: "/finanzas.webp"
      },
      { subtitle1: t("Benefits.Title"),
        subtitle2: t("Benefits.Comodity"),
        paragraph: t("Benefits.CDesc"),
        img: "/maleta.png"
      }
    ]
)


</script>

<template>
  <section class="flex flex-column p-3 w-full gap-3 ">
    <div class="flex justify-content-center align-content-center">
      <h2>{{ $t("Benefits.Title") }}</h2>
    </div>
    <div class="flex flex-column justify-content-center align-items-center w-full">
      <pv-timeline :value="benefits" align="alternate" class="flex flex-column gap-7 w-full md:w-6">
        <template #opposite="slotProps">
          <div class="flex justify-content-center align-items-center h-full">
            <img class="img-timeline w-12 md:w-auto" :src="slotProps.item.img"/>
          </div>
        </template>

        <template #content="slotProps">
          <div class="flex flex-column p-3 gap-3">
            <div>
              <h4>{{ slotProps.item.subtitle1 }}</h4>
              <h4>{{ slotProps.item.subtitle2 }}</h4>
            </div>
            <p>{{ slotProps.item.paragraph }}</p>
          </div>
        </template>
      </pv-timeline>
    </div>
  </section>



</template>

<style scoped>
h2{
  color: #05B295;
}
p {
  color: #264653;
}
</style>