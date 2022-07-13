 <template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="header-wrap _f _i-center">
          <div class="header__logo">
            <img src="@/assets/logo.svg" class="header__logo-pic" alt="logo" />
          </div>
          <nav class="nav _ml-auto">
            <ul class="nav-list">
              <li>
                <a href="#" class="nav__link">Услуги</a>
              </li>
              <li>
                <a href="#" class="nav__link">Портфолио</a>
              </li>
              <li>
                <a href="#" class="nav__link">Этапы</a>
              </li>
              <li>
                <a href="#" class="nav__link">Дизайнеры</a>
              </li>
            </ul>
          </nav>
          <div class="btn _ml-30">Заказать</div>
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
    <Services />
    <Info/>
    <ContactForm/>
  </div>
</template>

<script>
import Services from "./components/Services.vue";
import Info from "./components/Info.vue";
import ContactForm from "./components/ContactForm.vue";

export default {
  name: "App",
  components: {
    Services,
    Info,
    ContactForm
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
</style>
