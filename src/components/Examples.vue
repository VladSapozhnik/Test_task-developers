<template>
  <div class="examples">
    <div class="container">
      <h2 class="h2">Примеры онлайн-магазинов</h2>
      <swiper class="swiper examples-swiper-wrap" :options="swiperOption">
        <swiper-slide class="slider-item">
          <div>
            <div class="examples-swiper-item">
              <img
                class="examples-swiper-item__img"
                src="@/assets/examples-slider/1.jpg"
                alt=""
              />
            </div>
            <div class="examples-swiper-item">
              <img
                class="examples-swiper-item__img"
                src="@/assets/examples-slider/2.jpg"
                alt=""
              />
            </div>
            <div class="examples-swiper-item">
              <img
                class="examples-swiper-item__img"
                src="@/assets/examples-slider/3.jpg"
                alt=""
              />
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div>
            <div class="examples-swiper-item">
              <img
                class="examples-swiper-item__img"
                src="@/assets/examples-slider/1.jpg"
                alt=""
              />
            </div>
            <div class="examples-swiper-item">
              <img
                class="examples-swiper-item__img"
                src="@/assets/examples-slider/2.jpg"
                alt=""
              />
            </div>
            <div class="examples-swiper-item">
              <img
                class="examples-swiper-item__img"
                src="@/assets/examples-slider/3.jpg"
                alt=""
              />
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="banner-wrap">
        <div class="banner__button banner__button--prev swiper-slide"></div>
        <div class="banner__button banner__button--next swiper-slide"></div>
      </div>
      <div class="examples-wrap">
        <div class="column">
          <div class="examples-item">
            <img
              class="examples-item__img"
              src="@/assets/examples-slider/1.jpg"
              alt=""
            />
          </div>
          <div class="examples-item">
            <img
              class="examples-item__img"
              src="@/assets/examples-slider/2.jpg"
              alt=""
            />
          </div>
          <div class="examples-item">
            <img
              class="examples-item__img"
              src="@/assets/examples-slider/3.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="column">
          <div class="examples-item">
            <img
              class="examples-item__img"
              src="@/assets/examples-slider/4.jpg"
              alt=""
            />
          </div>
          <div class="examples-item">
            <img
              class="examples-item__img"
              src="@/assets/examples-slider/5.jpg"
              alt=""
            />
          </div>
          <div class="examples-item">
            <img
              class="examples-item__img"
              src="@/assets/examples-slider/6.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "../../node_modules/swiper/swiper.scss";
export default {
  name: "examples-block",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 20,
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

<style lang="scss" scoped>
.examples {
  padding: 121px 0;
  background: #daecff;
  background-image: url(@/assets/examples-wavea.svg),
    url(@/assets/examples-circle.svg), url(@/assets/examples-arrow.svg);
  background-position: 3% 301px, 93% 86%, -50% 99%;
  background-size: 215px, 108px, 814px;
  background-repeat: no-repeat, no-repeat;

  .h2 {
    margin-bottom: 51px;
  }
  &-swiper {
    .column {
      width: 100% !important;
    }
    &-wrap {
      display: none;
      max-width: 600px;
      margin-bottom: 30px;
    }
    &-item {
      & + & {
        margin-top: 15px;
      }
    }
  }
  &-wrap {
    display: flex;
    margin: 0 -15px;
  }

  .column {
    width: calc(50% - 30px);
    margin: 0px 15px;
  }

  &-item {
    border-radius: 15px;
    background: #daecff;
    &__img {
      border-radius: 15px;
    }
    & + & {
      margin-top: 38px;
    }
  }
}

.banner-wrap {
  display: none;
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
    margin-left: 107px;
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

@media (max-width: 1710px) {
  .examples {
    background-position: 2% 301px, 99% 86%, -50% 99%;
    background-size: 8%, 5%, 40%;
  }
}

@media (max-width: 1500px) {
  .examples {
    background-position: 2% 15px, 99% 98%, -55% 103%;
    background-size: 8%, 5%, 40%;
  }
}

@media (max-width: 640px) {
  .examples {
    padding: 23px 0 30px;
    background-image: none;
    .h2 {
      margin-bottom: 15px;
    }
    &-wrap {
      display: none;
    }
  }
  .banner-wrap {
    display: flex;
  }

  .examples-swiper-wrap {
    display: block;
  }
}
</style>