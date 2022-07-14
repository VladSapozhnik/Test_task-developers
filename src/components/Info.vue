<template>
  <div class="info">
    <div class="container">
      <h2 class="h2">Необходимо больше информации?</h2>
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
  background-image: url(@/assets/info-bg.svg), 
      url(@/assets/info-circle.svg);
  background-position: 85% 137px, 10% 150px;
  background-size: 689px, 59px;

  background-repeat: no-repeat, no-repeat;

  .h2 {
    margin-bottom: 82px;
    text-align: left;
    margin-bottom: 53px;
  }
  &__text {
    max-width: 600px;
    margin-bottom: 45px;
  }

  .btn {
    padding: 22px 56px;
  }
}

// @media (max-width: 1710px) {
//   .services {
//     background-position: 93% 97%;
//     background-size: 6%;
//   }
// }

// @media (max-width: 975px) {
//   .services {
//     background-position: 93% 97%;
//     background-size: 70px;
//   }
// }
</style>