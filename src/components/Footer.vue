<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrap">
        <div class="column">
          <div class="footer__logo">
            <img
              src="@/assets/footer-logo.svg"
              class="footer__logo-pic"
              alt="logo"
            />
          </div>
          <ul class="messenger-list messenger-list-desktop _f">
            <li class="messenger-item">
              <a class="messenger-link" href="#">
                <img
                  class="messenger-pic"
                  src="@/assets/instagram.svg"
                  alt="instagram"
                />
              </a>
            </li>
            <li class="messenger-item">
              <a class="messenger-link" href="#">
                <img
                  class="messenger-pic"
                  src="@/assets/facebook.svg"
                  alt="facebook"
                />
              </a>
            </li>
            <li class="messenger-item">
              <a class="messenger-link" href="#">
                <img
                  class="messenger-pic"
                  src="@/assets/telegram.svg"
                  alt="telegram"
                />
              </a>
            </li>
            <li class="messenger-item">
              <a class="messenger-link" href="#">
                <img
                  class="messenger-pic"
                  src="@/assets/viber.svg"
                  alt="viber"
                />
              </a>
            </li>
            <li class="messenger-item">
              <a class="messenger-link" href="#">
                <img
                  class="messenger-pic"
                  src="@/assets/whatsapp.svg"
                  alt="whatsapp"
                />
              </a>
            </li>
          </ul>
        </div>
        <div class="column footer-callback">
          <a class="footer-callback__link" href=""> Валерия: +380505859409 </a>
          <a class="footer-callback__link" href=""> Анна: +380505859409 </a>
          <a class="footer-callback__link" href=""> Валерия: +380505859409 </a>
        </div>
        <ul class="messenger-list messenger-list-mobile _f">
          <li class="messenger-item">
            <a class="messenger-link" href="#">
              <img
                class="messenger-pic"
                src="@/assets/instagram.svg"
                alt="instagram"
              />
            </a>
          </li>
          <li class="messenger-item">
            <a class="messenger-link" href="#">
              <img
                class="messenger-pic"
                src="@/assets/facebook.svg"
                alt="facebook"
              />
            </a>
          </li>
          <li class="messenger-item">
            <a class="messenger-link" href="#">
              <img
                class="messenger-pic"
                src="@/assets/telegram.svg"
                alt="telegram"
              />
            </a>
          </li>
          <li class="messenger-item">
            <a class="messenger-link" href="#">
              <img class="messenger-pic" src="@/assets/viber.svg" alt="viber" />
            </a>
          </li>
          <li class="messenger-item">
            <a class="messenger-link" href="#">
              <img
                class="messenger-pic"
                src="@/assets/whatsapp.svg"
                alt="whatsapp"
              />
            </a>
          </li>
        </ul>
        <div class="column">
          <a href="#">hr@dv-s.com</a>
        </div>
      </div>
      <p class="copyright">Developers 2018-2022 © All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-block",
};
</script>

<style lang="scss">
.footer {
  background: #64abf9;
  padding: 107px 0 79px;
  color: #ffffff;
  &-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 120px;
  }
  &__logo {
    margin-bottom: 45px;
  }

  &-callback {
    margin: 0 126px 0 107px;
    &__link {
      display: block;
      padding-left: 40px;
      position: relative;
      font-size: 20px;
      line-height: 24px;
      margin-bottom: 15px;
      &::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        left: 0px;
        top: 1px;
        background: url(@/assets/viber.svg) no-repeat;
      }
    }
  }

  .messenger-list {
    &-desktop {
      display: flex;
    }
    &-mobile {
      display: none;
    }
  }
  .messenger-item + .messenger-item {
    margin-left: 38px;
  }

  .copyright {
    text-align: center;
    font-size: 18px;
    line-height: 175%;
  }
}

@media (max-width: 975px) {
  .footer {
    &__logo {
      margin-bottom: 20px;
    }
    &-callback {
      margin: 0 46px 0 37px;
    }
  }
}

@media (max-width: 844px) {
  .footer {
    &-wrap {
      flex-direction: column;
      align-items: center;
    }

    &__logo {
      margin-bottom: 27px;
    }
    &-callback {
      margin-bottom: 62px;
    }
  }
  .messenger-list {
    margin-bottom: 40px;
    &-desktop {
      display: none;
    }
    &-mobile {
      display: flex;
    }
  }
}
@media (max-width: 640px) {
  .footer {
    padding: 46px 0 138px;
    font-size: 16px;
    line-height: 140%;
    &-callback {
      font-size: 16px;
    }
    &-wrap {
      margin-bottom: 23px;
    }
  }
  .copyright {
    font-size: 14px;
  }
}
</style>