<template>
  <div class="examples">
    <div class="container">
      <h2 class="h2">Примеры онлайн-магазинов</h2>
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
export default {
  name: "examples-block",
};
</script>

<style lang="scss">
.examples {
  padding: 121px 0;
  background: #daecff;
  .h2 {
    margin-bottom: 51px;
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
</style>