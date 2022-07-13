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
.services {
  padding: 120px 0;
  background: #daecff;
}

.accordion {
  &-item {
    background: #fff;
    padding: 14px 70px 15px 96px;
    font-weight: 400;
    font-size: 18px;
    line-height: 175%;
    color: #111;
    border-radius: 15px;
    position: relative;
    margin-bottom: 10px;
    &__head {
      cursor: pointer;
    }
    &__body {
      max-height: 0;
      overflow: hidden;
      transition: all 0.3s ease-out;
      p + p {
        margin-top: 36px;
      }
    }
    &__content {
      padding: 32px 0 47px 0;
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
    }
  }
}
</style>