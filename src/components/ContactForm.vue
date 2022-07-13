<template>
  <div class="contacts">
    <div class="container">
      <h2 class="h2">Обсудить проект</h2>
      <p class="contacts__text">
        Расскажите о своих бизнес-целях и мы поможем вам в их достижении
      </p>
      <form>
        <div class="validation__field _f _f-column _i-center">
          <input
            class="validation__input _mb-20"
            name="name"
            type="text"
            placeholder="Имя"
          />
          <input
            class="validation__input _mb-20"
            name="messenger"
            type="text"
            placeholder="Telegram/Viber"
          />
          <input
            class="validation__input _mb-30"
            name="email"
            type="text"
            placeholder="Email"
          />
          <button class="btn">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "Contact-form",
  data() {
    return {
        
    };
  },
};
</script>

<style lang="scss">
.contacts {
  background-color: #daecff;
  padding: 180px 0 128px;
  .h2 {
    margin-bottom: 10px;
  }
  &__text {
    max-width: 479px;
    line-height: 175%;
    text-align: center;
    margin: 0 auto 27px;
  }

  .btn {
    display: block;
    padding: 22px 85px;
  }
}
</style>