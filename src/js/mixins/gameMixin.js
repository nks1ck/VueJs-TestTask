import { gameCore } from "../gameCore";

export const gameMixin = {
    data: () => ({
        randomNumber: 0,
        userInputNumber: '',
        correctCounter: 0,
        numberRank: '',
        lifeTime: '',
    }),
    methods: {
        nextNum () {
            this.compareNums();
            this.refreshInputNumber();
            this.toggleNumberView();
        },
        compareNums () {
            if (this.userInputNumber == this.randomNumber) {
                return this.correctCounter++;
            }

            return this.correctCounter--;
        },
        refreshInputNumber () {
            this.randomNumber = gameCore.getRandomNum(this.numberRank);
            this.userInputNumber = '';
        },
        startGame () {
            this.refreshInputNumber();
            gameCore.hideNumber(this.lifeTime);
        },
        toggleNumberView () {
            gameCore.hideNumber(this.lifeTime);
            gameCore.showNumber(this.randomNumber);
        },
    }
}