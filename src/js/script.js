export class ErrorHandler {
    /**
     * Возвращает ошибку
     * @param value Отслеживаемое значение
     * @param min Минимальное значение value
     * @param max Максимальное значение
     * @param id Id Элемента, который нужно подсвечивать
     */
    static errorHandler = (value, min, max, id) => {
        if (value > max || value < min) {
            return ErrorHandler.error(id, true);
        }

        return ErrorHandler.error(id, false);
    }

    /**
     * Возвращает вызов функции смены пользовательского интерфейса
     * @param elementId ID Элемента, который нужно подсвечивать
     * @param isCorrect Значение, которое отображает удовлетворяет ли значение условию
     */
    static error = (elementId, isCorrect) => {
        return ErrorHandler.changeUiOnError(elementId, isCorrect);
    }

    /**
     * Переключает доступность кнопок и цвет input
     * @param elementId ID Элемента, который нужно подсвечивать
     * @param isCorrect Значение, которое отображает удовлетворяет ли значение условию
     */
    static changeUiOnError = (elementId, isCorrect) => {
        ErrorHandler.toggleAllButtons(isCorrect);
        ErrorHandler.changeBackgroundOnError(elementId, isCorrect);
    }

    /**
     * Переключает возможность нажатия на кнопку
     * @param isEnable Переключатель
     */
    static toggleAllButtons = (isEnable) => {
        document.querySelectorAll('.btn').forEach(elem => {
            elem.disabled = isEnable;
        })
    }

    /**
     * Меняет фон поля ввода при ошибке
     * @param id id Элемента, который нужно подсвечивать
     * @param isWrong Переключатель
     */
    static changeBackgroundOnError = (id, isWrong) => {
        let element = document.getElementById(id);

        if(isWrong) {
            return element.style.background = '#EB544D';
        }

        return element.style.background = '';
    }
}


