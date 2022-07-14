<template>
  <section>
    <div class="container">
      <swiper class="swiper" :options="swiperOption" >
        <swiper-slide v-for="(item, index) of slideData" :key="index">
          <div class="slider-item">
            <div>
              <h2 class="h2">{{ item.title }}</h2>
              <p class="slider-item__description">
                {{ item.description }}
              </p>
            </div>
            <img class="slider-item__img" :src="item.src" alt="" />
          </div>
        </swiper-slide>
      </swiper>

      <div class="banner__button--prev swiper-slide">dsadas</div>
      <div class="banner__button--next swiper-slide">dsad</div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "../../node_modules/swiper/swiper.scss";
export default {
  name: "stages-block",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slideData: [
        {
          title: "1. Анализ",
          description:
            "Для того, чтобы онлайн-магазин приносил выгоду, перед его запуском необходимо провести анализ других предложений рынка, оценить конкурентов и найти наиболее удобное решение.",
          src: require("@/assets/slider-img/1.svg"),
        },
        {
          title: "2. Визуальное решение",
          description:
            "Разработка дизайна ключевых страниц магазина – главная, каталог, информационные разделы, раздел корзины, товаров. Для нас главное – передать настроение бренда, сделать удобный для пользователя сайт. ",
          src: require("@/assets/slider-img/2.svg"),
        },
        {
          title: "3. Техническая реализация",
          description:
            "После утверждения дизайн-макета наступает следующий этап – верстка. Это трудоемкий процесс: программисты должны все тщательно прописать, чтобы не допустить технических ошибок.",
          src: require("@/assets/slider-img/3.svg"),
        },
        {
          title: "4. Наполнение контентом",
          description:
            "Создание и публикация текстов, а также видео материала. Хороший контент и качественные фотографии привлекают больше посетителей и помогают клиенту лучше ознакомиться с ассортиментом.",
          src: require("@/assets/slider-img/4.svg"),
        },
        {
          title: "5. Тестирование",
          description:
            "Составление плана тестирования для определения ошибок. Проверка работы сайта и визуального восприятия для улучшения сайта. Также используются чек-листы для четкого определения ошибок и их устранения.",
          src: require("@/assets/slider-img/5.svg"),
        },
      ],
      swiperOption: {
        freeMode: true,
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: "#banner-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".banner__button--next",
          prevEl: ".banner__button--prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.slider-item {
  display: flex;
  max-width: 672px;
  padding: 85px 70px 63px 33px;
  border: 2px solid #67aefc;
  border-radius: 15px;
  justify-content: space-between;
  .h2 {
    text-align: left;
    margin-bottom: 21px;
  }

  &__description {
    max-width: 274px;
  }

  &__img {
    display: block;
  }
}
</style>