<script setup>
import { useI18n } from "vue-i18n";
import {computed} from "vue";
const { t } = useI18n();

const benefits = computed(()=>
    [
      { subtitle1: t("benefits.subTitle1"),
        subtitle2: t("benefits.subTitle2"),
        paragraph: t("benefits.paragraph1"),
        img: "https://hiraoka.com.pe/media/mageplaza/blog/post/c/o/como-elegir-el-mejor-celular.jpg"
      },
      { subtitle1: t("benefits.subTitle3"),
        subtitle2: t("benefits.subTitle4"),
        paragraph: t("benefits.paragraph2"),
        img: "https://www.managers.org.uk/wp-content/uploads/2020/03/TimeSaving-scaled.jpg"
      },
      { subtitle1: t("benefits.subTitle5"),
        subtitle2: t("benefits.subTitle6"),
        paragraph: t("benefits.paragraph3"),
        img: "https://latamobility.com/wp-content/uploads/2024/02/HOOP-1.png"
      },
      { subtitle1: t("benefits.subTitle7"),
        subtitle2: t("benefits.subTitle8"),
        paragraph: t("benefits.paragraph4"),
        img: "https://easylift.pk/wp-content/uploads/2024/02/carpool-safety.jpeg"
      },
      { subtitle1: t("benefits.subTitle9"),
        subtitle2: t("benefits.subTitle10"),
        paragraph: t("benefits.paragraph5"),
        img: "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/vip/2024/10/flexible-work-schedules-inc-GettyImages-1468302529.jpg"
      }
    ]
)


</script>

<template>
  <section class="flex flex-column p-3 w-full gap-3 ">
    <div class="flex justify-content-center align-content-center">
      <h2>{{ $t("benefits.title") }}</h2>
    </div>
    <div class="flex flex-column justify-content-center align-items-center w-full">
      <pv-timeline :value="benefits" align="alternate" class="flex flex-column gap-7 w-full md:w-6">
        <template #opposite="slotProps">
          <div class="flex justify-content-center align-items-center h-full">
            <img class="img-timeline w-12" :src="slotProps.item.img"/>
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
img{
  border-radius: 8px;

}
</style>