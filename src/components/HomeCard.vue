<template>
  <div class="container">
    <div class="card">
      <h1>Игра "Запомни Число"</h1>
      <div class="form-control">
        <input id="user-input-field" type="text" placeholder="Введите ваше число"
               v-model="userInputNumber" disabled="disabled"/>
      </div>

      <h2>Рандомное число: <span id="random-number">{{ randomNumber }}</span></h2>
      <h2>Очков: {{ correctCounter }}</h2>


      <button class="btn btn-danger" @click="nextNum" disabled="disabled">Проверить</button>
      <button class="btn btn-primary" @click="startGame" disabled="disabled">Начать игру</button>

      <div class="form-control half">

        <label for="life-time-input">Время отображения числа: </label>
        <input id="life-time-input" type="number" v-model="lifeTime" placeholder="[ 0.2 - 2 ]" />

        <label for="number-rank-input">Разрядность числа</label>
        <input id="number-rank-input" type="number" v-model="numberRank" placeholder="[ 2 - 5 ]" />

      </div>

    </div>
  </div>
</template>

<script>
import { ErrorHandler } from "../js/script";
import { gameMixin } from "../js/mixins/gameMixin";

export default {
  mixins: [gameMixin],
  watch: {
    numberRank(value) {
      ErrorHandler.errorHandler(value, 2, 5, 'number-rank-input');
    },
    lifeTime(value) {
      ErrorHandler.errorHandler(value, 0.2, 2, 'life-time-input');
    }
  }
}

</script>
