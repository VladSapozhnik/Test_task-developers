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
          <ul class="messenger-list _f">
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
      & + & {
        margin-top: 15px;
      }
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
  .messenger-item + .messenger-item {
    margin-left: 38px;
  }

  .copyright {
    text-align: center;
    font-size: 18px;
    line-height: 175%;
  }
}
</style>