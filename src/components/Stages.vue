<template>
  <section class="stages">
    <div class="container">
      <h2 class="h2">Этапы разработки интернет-магазина</h2>
      <swiper class="swiper slider-wrap" :options="swiperOption">
        <swiper-slide v-for="(item, index) of slideData" :key="index">
          <div class="slider-item">
            <div>
              <h3 class="h3">{{ item.title }}</h3>
              <p class="slider-item__description">
                {{ item.description }}
              </p>
            </div>
            <img class="slider-item__img" :src="item.src" alt="" />
          </div>
        </swiper-slide>
      </swiper>
      <div class="banner-wrap">
        <div class="banner__button banner__button--prev swiper-slide"></div>
        <div class="banner__button banner__button--next swiper-slide"></div>
      </div>
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
          200: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.stages {
  padding: 123px 0 128px;
  background-image: url(@/assets/stages-circle.svg),
    url(@/assets/stages-wavea.svg);
  background-position: 10% 129px, 85% 96%;
  background-size: 70px, 190px;
  background-repeat: no-repeat, no-repeat;
  .h2 {
    margin-bottom: 84px;
  }
}

.banner-wrap {
  display: flex;
  justify-content: center;
}

.banner__button {
  width: 60px;
  height: 60px;
  border: 2px solid #67aefc;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  & + & {
    margin-left: 30px;
  }

  &--prev {
    background-image: url(@/assets/slider-img/arrow-prev.svg);
    background-repeat: no-repeat;
    background-position: 45% 50%;
  }

  &--next {
    background-image: url(@/assets/slider-img/arrow-next.svg);
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
}

.slider-wrap {
  max-width: 672px;
  overflow: visible;
  margin: 0;
  display: flex;
  align-items: stretch;
  margin-bottom: 84px;
}
.slider-item {
  display: flex;
  max-width: 672px;
  padding: 53px 73px 59px 33px;
  border: 2px solid #67aefc;
  border-radius: 15px;
  height: 391px;
  justify-content: space-between;
  .h3 {
    margin-bottom: 21px;
    font-weight: 700;
    font-size: 21px;
    line-height: 125%;
    max-width: 270px;
  }

  &__description {
    max-width: 300px;
    margin-bottom: 64px;
    font-size: 18px;
    line-height: 140%;
  }

  &__img {
    max-width: 227px;
    display: block;
  }
}

@media (max-width: 1710px) {
  .stages {
    background-size: 4%, 10%;
    background-position: 5% 129px, 85% 96%;
  }
}

@media (max-width: 1710px) {
  .stages {
    background-position: 2% 59px, 85% 96%;
  }
}

@media (max-width: 640px) {
  .stages {
    background-image: url(@/assets/stages-circle.svg);
    background-position: -4% 18px;
    background-size: 39px;
    background-repeat: no-repeat;
    padding: 42px 0 45px;
    .h2 {
      margin-bottom: 20px;
    }
  }

  .banner__button {
    & + & {
      margin-left: 107px;
    }
  }

  .slider-wrap {
    overflow: hidden;
    margin-bottom: 25px;
  }
  .slider-item {
    padding: 27px 29px 53px 33px;
    height: auto;
    min-height: 615px;
    flex-direction: column;
    align-items: center;
    &__description {
      max-width: 100%;
      font-size: 17px;
      line-height: 175% !important;
    }
    .h3 {
      font-size: 17px;
      line-height: 27px;
      font-weight: 800;
      margin-bottom: 0;
    }
  }
}
</style>