<template>
  <div class="info">
    <div class="container">
      <h2 class="h2">Необходимо больше информации?</h2>
      <img
        class="info-pic__mobile"
        src="@/assets/mobile/info-pic.svg"
        alt="info"
      />
      <p class="info__text">
        Если Вы владелец онлайн-магазина или только начинаете свой путь в
        электронной коммерции и вам нужен уникальный дизайн онлайн магазина для
        стартапа, обратитесь к нашему веб дизайнеру. За выгодную цену и короткий
        период времени, он поможет визуализировать ваш веб проект.
      </p>
      <div class="btn">Оставить заявку</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBlock",
};
</script>

<style lang="scss">
.info {
  padding: 216px 0 180px;
  background-image: url(@/assets/info-bg.svg), url(@/assets/info-circle.svg);
  background-position: 85% 137px, 10% 150px;
  background-size: 689px, 59px;

  background-repeat: no-repeat, no-repeat;
  &-pic__mobile {
    display: none;
  }
  .h2 {
    text-align: left;
    margin-bottom: 53px;
  }
  &__text {
    max-width: 600px;
    margin-bottom: 45px;
    font-size: 18px;
    line-height: 140%;
  }

  .btn {
    padding: 22px 56px;
  }
}

@media (max-width: 1710px) {
  .info {
    background-position: 85% 50%, 5% 150px;
    background-size: 40%, 3%;
  }
}

@media (max-width: 1200px) {
  .info {
    background-position: 85% 80%, 1% 150px;
    background-size: 40%, 3%;
  }
}

@media (max-width: 640px) {
  .info {
    padding: 43px 0 50px;
    background-image: none;
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 39px;
      height: 39px;
      background-image: url(@/assets/mobile/circle-info.svg);
      background-repeat: no-repeat;
      position: absolute;
      top: -12px;
      right: 33px;
    }
    &-pic__mobile {
      display: block;
      margin: 0 auto 29px;
    }

    .h2 {
      margin-bottom: 27px;
    }

    &__text {
      margin-bottom: 29px;
    }
  }
}
</style>