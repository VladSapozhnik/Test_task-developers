<template>
  <div>
    <div
      class="accordion-item"
      v-for="(item, index) of servicesData"
      :key="index"
      :class="{ active: item.isOpen }"
    >
      <div @click="item.isOpen = !item.isOpen" class="accordion-item__head">
        {{ item.title }}
      </div>
      <div class="accordion-item__body">
        <div class="accordion-item__content">
          <p>{{ item.text }}</p>
          <p v-if="item.text2">{{ item.text2 }}</p>
          <p v-if="item.text3">{{ item.text3 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesItem",
  props: {
    servicesData: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
.accordion {
  &-item {
    background: #fff;
    padding: 14px 70px 19px 0px;
    font-weight: 400;
    font-size: 18px;
    line-height: 175%;
    color: #111;
    border-radius: 15px;
    position: relative;
    margin-bottom: 10px;
    &__head {
      padding-left: 96px;
      cursor: pointer;
      padding-bottom: 0;
      transition: all 0.3s ease-out;
    }
    &__body {
      max-height: 0;
      overflow: hidden;
      transition: all 0.3s ease-out;
      position: relative;
      padding-left: 96px;
      &::before {
        content: "";
        width: 1px;
        min-height: 100%;
        display: block;
        position: absolute;
        background: #000000;
        top: 0;
        left: 54px;
      }
      p + p {
        margin-top: 36px;
      }
    }
    &__content {
      padding: 16px 0 12px 0;
    }
    &::after {
      content: "";
      position: absolute;
      width: 24px;
      height: 24px;
      background: #75e169;
      border-radius: 50%;
      top: 18px;
      left: 44px;
      transition: all 0.3s ease-out;
    }
    &::before {
      content: "";
      position: absolute;
      width: 30px;
      height: 30px;
      background: url("@/assets/array.svg") no-repeat center center;
      right: 39px;
      top: 15px;
      transform: rotate(180deg);
      transition: all 0.3s ease-out;
    }
    &.active {
      .accordion-item__body {
        transition: all 0.3s ease-out;
        max-height: 1000px;
      }
      &::after {
        background: #67aefc;
      }
      &::before {
        transform: rotate(0deg);
      }

      .accordion-item__head {
        padding-bottom: 32px;
      }
    }
  }
}

@media (max-width: 640px) {
  .accordion {
    &-item {
      padding: 14px 65px 17px 0px;
      font-size: 17px;
      line-height: 175%;
      margin-bottom: 10px;
      &__head {
        padding-left: 57px;
      }
      &__body {
        padding-left: 57px;
        
        &::before {
          left: 30px;
          min-height: 84%;
        }
        p + p {
          margin-top: 0px;
        }
      }
      &__content {
        padding: 0 0 46px;
      }
      &::after {
        width: 15px;
        height: 15px;
        left: 24px;
      }
    }

    &.active {
      .accordion-item__head {
        padding-bottom: 19px;
      }
    }
  }
}
</style>