<template>
  <div class="services">
    <div class="container">
      <h2 class="h2">
        Что входит в услугу по созданию дизайна интернет-магазина?
      </h2>
      <div class="accordion">
        <ServicesItem :isOpen="isOpen" :servicesData="servicesData" />
      </div>
    </div>
  </div>
</template>

<script>
import ServicesItem from "./ServicesItem.vue";
export default {
  components: { ServicesItem },
  name: "HelloWorld",
  data() {
    return {
      isOpen: false,
      servicesData: [
        {
          title: "Дизайн портала	",
          text: "Дизайн портала — это оформление контента, совокупность всех графических элементов на веб-странице. Основная задача дизайна — познакомить пользователя со страницей. Продуманный дизайн создает нужное впечатление о компании.",
          isOpen: false,
        },
        {
          title: "Дизайн адаптивной мобильной версии",
          text: "Мобильная версия сайта удобна для пользователя, потому что сильно упрощена по сравнению с обычной версией. Мобильная версия дает наиболее приоритетную информацию, а также позволяет совершать заказ/покупку с минимумом действий. ",
          text2:
            "При адаптивной версии вся структура сайта автоматически подстраивается под различную ширину экрана. Для того, чтобы получить рабочий продукт не нужно писать все с нуля — достаточно лишь подправить CSS и HTML.",
          text3:
            "Один URL избавляет нас от ненужных редиректов, и надобности пользователю запоминать адрес мобильной версии.",
          isOpen: false,
        },
        {
          title: "Дизайн десктопной версии",
          text: "Десктопную версию сайта просматривают пользователи со стационарных компьютеров. Основная цель: посерфить, углубиться в детали, получить больше информации, сравнить, выбрать, прицениться.",
          isOpen: false,
        },
        {
          title: "Пользовательский интерфейс",
          text: "Цель дизайна пользовательского интерфейса - сделать взаимодействие максимально простым и эффективным, насколько это возможно, с точки зрения достижения целей пользователя. Хороший дизайн пользовательского интерфейса облегчает выполнение поставленной задачи, не привлекая к себе лишнего внимания.",
          isOpen: false,
        },
        {
          title: "Микро UX",
          text: "Микро-анимация может изменить восприятие продукта, пользовательское поведение и повысить конверсию. Небольшие, преимущественно функциональные анимации поддерживают пользователя: обеспечивают визуальную обратную связь и более понятно отражают происходящие изменения. Микро-анимации способны многое объяснить без слов.",
          isOpen: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.services {
  padding: 120px 0;
  background: #daecff url(@/assets/handbag.svg) no-repeat 93% 83%;

  .h2 {
    margin-bottom: 82px;
  }
}

@media (max-width: 1710px) {
  .services {
    background-position: 93% 97%;
    background-size: 6%;
  }
}

@media (max-width: 975px) {
  .services {
    background-position: 93% 97%;
    background-size: 70px;
  }
}

@media (max-width: 640px) {
  .services {
    padding: 16px 0 30px;
    background: #daecff;

    .h2 {
      margin-bottom: 17px;
    }
  }
}
</style>