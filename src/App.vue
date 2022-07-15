 <template>
  <div id="app">
    <ul class="nav-mobile" :class="{ active: isOpen }">
      <li>
        <a href="#services" class="nav-mobile__link">Услуги</a>
      </li>
      <li>
        <a href="#" class="nav-mobile__link">Портфолио</a>
      </li>
      <li>
        <a  href="#stages" class="nav-mobile__link">Этапы</a>
      </li>
      <li>
        <a href="#" class="nav-mobile__link">Дизайнеры</a>
      </li>
    </ul>
    <header class="header">
      <div class="container">
        <div class="header-wrap _f _i-center">
          <div class="header__logo">
            <img src="@/assets/logo.svg" class="header__logo-pic" alt="logo" />
          </div>
          <div @click="isOpen = !isOpen" class="btn-popup _ml-auto">
            <span class="btn-popup__circle"></span>
            <span class="btn-popup__circle"></span>
            <span class="btn-popup__circle"></span>
          </div>

          <nav class="nav _ml-auto">
            <ul class="nav-list">
              <li>
                <a href="#services" class="nav__link">Услуги</a>
              </li>
              <li>
                <a href="#" class="nav__link">Портфолио</a>
              </li>
              <li>
                <a href="#stages" class="nav__link">Этапы</a>
              </li>
              <li>
                <a href="#" class="nav__link">Дизайнеры</a>
              </li>
            </ul>
          </nav>
          <a href="#contacts" class="btn _ml-30">Заказать</a>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="container">
        <h1 class="h1">Разработка интернет-магазина с нуля за неделю</h1>
        <p class="main__subtitle">
          Дизайн интернет магазина, элементов микро UX, корзин, личного кабинета
          - от фирменного стиля до пользовательского интерфейса в сжатые сроки с
          командой Virtual Designers
        </p>
        <div class="btn main-btn">Заказать</div>
      </div>
    </main>
    <Services id="services"/>
    <Stages id="stages" />
    <Examples />
    <Info />
    <ContactForm id="contacts" />
    <Footer />
  </div>
</template>

<script>
import Services from "./components/Services.vue";
import Info from "./components/Info.vue";
import ContactForm from "./components/ContactForm.vue";
import Stages from "./components/Stages.vue";
import Examples from "./components/Examples.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Services,
    Info,
    ContactForm,
    Stages,
    Examples,
    Footer,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
}

.header {
  background-color: #67aefc;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;
}

.btn-popup {
  display: none;
  width: 49px;
  cursor: pointer;
  &__circle {
    width: 13px;
    height: 13px;
    background: #ffffff;
    border-radius: 50%;
    display: block;
    & + & {
      margin-left: 5px;
    }
  }
}

.nav-mobile {
  width: 100%;
  background: #67aefc;
  position: fixed;
  padding: 137px 0 49px;
  text-align: center;
  transition: all 0.3s ease;
  transform: translateY(-100%);
  &.active {
    left: 0;
    top: 0;
    transform: translateY(0%);
  }
  li {
    font-weight: 800;
    font-size: 17px;
    line-height: 27px;
    text-transform: uppercase;
    color: #ffffff;
    a:hover {
      padding-bottom: 2px;
      border-bottom: 2px solid #ffffff;
    }
  }
  li + li {
    margin-top: 43px;
  }
}

.nav {
  display: block;
  .nav-list {
    display: flex;
    li {
      margin-left: 37px;
    }
  }

  .nav__link {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
  }
}

.main {
  padding: 266px 0 180px;
  background-image: url(@/assets/main-circle.svg), url(@/assets/main-wavea.svg),
    url(@/assets/main-bg.svg);
  background-position: 13% 200px, 0% 90%, 80% 180px;
  background-size: 52px, 236px, 776px;
  background-repeat: no-repeat, no-repeat, no-repeat;

  .h1 {
    max-width: 593px;
    font-weight: 900;
    font-size: 50px;
    line-height: 125%;
    color: #484848;
    margin-bottom: 20px;
  }

  &__subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    max-width: 432px;
    margin-bottom: 58px;
  }

  &-btn {
    padding: 21px 90px !important;
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
  }
}

@media (max-width: 1710px) {
  .main {
    background-size: 3%, 15%, 40%;
    background-position: 3% 200px, 0% 95%, 90% 50%;
  }
}

@media (max-width: 975px) {
  .main {
    background-size: 4%, 15%, 40%;
    background-position: 1% 100px, 0% 95%, 90% 85%;
  }
  .btn-popup {
    display: flex;
  }
  .nav {
    display: none;
  }
  .header-wrap {
    .btn {
      display: none !important;
    }
  }
}
@media (max-width: 640px) {
  .main {
    padding: 530px 0 51px;
    background-image: url(@/assets/mobile/circle-main.svg),
      url(@/assets/mobile/main-bg.svg);
    background-position: 90% 78%, 50% 84px;
    background-size: 15px, 100%;
    background-repeat: no-repeat, no-repeat;
    .h1 {
      font-size: 27px;
      line-height: 120%;
    }
  }
  .header__logo {
    width: 136px;
    padding: 5px 0;
  }
}

@media (max-width: 500px) {
  .main {
    padding: 440px 0 51px;
  }
}

@media (max-width: 425px) {
  .main {
    padding: 386px 0 51px;
  }
}
</style>
