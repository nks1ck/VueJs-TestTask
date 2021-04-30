export class gameCore {

    /**
     * Скрывает кнопку через указанное время
     * @param lifetime Время (в Сек.), через которое нужно скрыть кнопку
     */
    static hideNumber = (lifetime) => {
        setTimeout(() => {
            document.getElementById('random-number').style.display = 'none';
            document.getElementById('user-input-field').disabled = false;
        }, lifetime * 1000);

        document.getElementById('user-input-field').disabled = true;
    }

    /**
     * Отображает кнопку
     */
    static showNumber = () => {
        document.getElementById('random-number').style.display = '';
    }

    /**
     * Возвращает рандомное значение с определенным разрядом
     * @param numberRank Разрядность числа
     */
    static getRandomNum = (numberRank) => {
        let min, max;

        // TODO: Отрефакторить данный кусок.
        switch (numberRank) {
            case "2":
                min = 10;
                max = 99;
                break;
            case "3":
                min = 100;
                max = 999;
                break;
            case "4":
                min = 1000;
                max = 9999;
                break;
            case "5":
                min = 10000;
                max = 99999;
                break;
            default:
                min = 1;
                max = 10;
                break;
        }

        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
}