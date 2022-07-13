<template>
  <div class="contacts">
    <div class="container">
      <h2 class="h2">Обсудить проект</h2>
      <p class="contacts__text">
        Расскажите о своих бизнес-целях и мы поможем вам в их достижении
      </p>
      <form @submit.prevent="submit">
        <div class="validation__field _f _f-column _i-center">

          <input
            class="form__input validation__input _mb-20"
            :class="{ 'form-group--error': $v.name.$error }"
            name="name"
            type="text"
            placeholder="Имя"
            v-model.trim="$v.name.$model"
          />
          <div class="error" v-if="!$v.name.required">Name is required</div>
          <div class="error" v-if="!$v.name.minLength">
            Name must have at least
            {{ $v.name.$params.minLength.min }} letters.
          </div>

          <input
            class="form__input validation__input _mb-20"
            :class="{ 'form-group--error': $v.messenger.$error }"
            name="messenger"
            type="text"
            placeholder="Telegram/Viber"
            v-model.trim="$v.messenger.$model"
          />
          <div class="error" v-if="!$v.messenger.required">
            messenger is required
          </div>
          <div class="error" v-if="!$v.messenger.minLength">
            Messenger must have at least
            {{ $v.messenger.$params.minLength.min }} letters.
          </div>

          <input
            class="form__input validation__input _mb-20"
            :class="{ 'form-group--error': $v.email.$error }"
            name="email"
            type="text"
            placeholder="Email"
            v-model.trim="$v.email.$model"
          />
          <div class="error" v-if="!$v.email.required">email is required</div>
          <div class="error" v-if="!$v.email.minLength">
            email must have at least
            {{ $v.email.$params.minLength.min }} letters.
          </div>
          <button
            class="btn"
            type="submit"
            :disabled="submitStatus === null"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>

    <!-- <div class="container">
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
    </div> -->
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Contact-form",
  data () {
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
      minLength: minLength(4),
    },
  },
  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
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

.form-group {
  position: relative;
  display: block;
}
</style>