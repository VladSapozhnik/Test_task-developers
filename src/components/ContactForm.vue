<template>
  <div class="contacts">
    <div class="container">
      <h2 class="h2">Обсудить проект</h2>
      <p class="contacts__text">
        Расскажите о своих бизнес-целях и мы поможем вам в их достижении
      </p>
      <form @submit.prevent="submitHandler">
        <div class="validation__field _f _f-column _i-center">
          <input
            class="form__input validation__input _mb-20"
            :class="{
              'form-group--error':
                ($v.name.$dirty && !$v.name.required) ||
                ($v.name.$dirty && !$v.name.minLength),
            }"
            name="name"
            type="text"
            placeholder="Имя"
            v-model.trim="$v.name.$model"
          />
          <small class="error" v-if="!$v.name.required && $v.name.$dirty">
            Поле, обязательное для заполнения
          </small>
          <small class="error" v-if="!$v.name.minLength && $v.name.$dirty">
            Имя должно иметь не менее
            {{ $v.name.$params.minLength.min }} символа.
          </small>

          <input
            class="form__input validation__input _mb-20"
            :class="{
              'form-group--error':
                ($v.name.$dirty && !$v.messenger.required) ||
                ($v.name.$dirty && !$v.messenger.minLength),
            }"
            name="messenger"
            type="text"
            placeholder="Telegram/Viber"
            v-model.trim="$v.messenger.$model"
          />
          <small
            class="error"
            v-if="!$v.messenger.required && $v.messenger.$dirty"
          >
            Поле, обязательное для заполнения
          </small>
          <small
            class="error"
            v-if="!$v.messenger.minLength && $v.messenger.$dirty"
          >
            Имя должно иметь не менее
            {{ $v.messenger.$params.minLength.min }} символа.
          </small>

          <input
            class="form__input validation__input _mb-20"
            :class="{
              'form-group--error':
                ($v.email.$dirty && $v.email.required) ||
                ($v.email.$dirty && $v.email.email),
            }"
            name="email"
            type="text"
            placeholder="Email"
            v-model.trim="$v.email.$model"
          />
          <small class="error" v-if="!$v.email.required && $v.email.$dirty">
            Поле, обязательное для заполнения
          </small>
          <small class="error" v-if="!$v.email.email && $v.email.$dirty">
            Введите корректный Email
          </small>
          <button class="btn" type="submit">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Contact-form",
  data() {
    return {
      name: "",
      messenger: "",
      email: "",
      submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    messenger: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    submitHandler() {
      console.log("submit!");

      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
    },
  },
};
</script>

<style lang="scss">
.contacts {
  background-color: #daecff;
  background-image: url(@/assets/phone.svg), url(@/assets/contact-circle.svg);
  background-position: 13% 212px, 80% 260px;
  background-size: 350px, 184px;
  background-repeat: no-repeat, no-repeat;
  padding: 180px 0 128px;
  .h2 {
    margin-bottom: 10px;
  }
  &__text {
    max-width: 440px;
    line-height: 175%;
    text-align: center;
    margin: 0 auto 27px;
  }
  .btn {
    display: block;
    padding: 22px 85px;
  }
}

.form-group {
  position: relative;
  display: block;
}

@media (max-width: 1710px) {
  .contacts {
    background-size: 20%, 10%;
  }
}

@media (max-width: 975px) {
  .contacts {
    background-position: 5% 90%, 90% 20%;
  }
}

@media (max-width: 640px) {
  .contacts {
    background-color: #daecff;
    background-image: url(@/assets/mobile/phone.svg);
    background-size: 286px;
    background-position: 50% 95%;
    background-repeat: no-repeat;
    padding: 42px 0 358px;
    .h2 {
      margin-bottom: 12px;
    }
    &__text {
      max-width: max-content;
      margin: 0 auto 25px;
    }
  }
}
</style>