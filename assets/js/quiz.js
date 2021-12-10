const answers = {
    "s": {
        "description": " Гадалка говорит, что в ближайшем будущем вас ожидает материальное поступление. Теперь, когда вы знаете об этом, чтобы укрепить предсказание, вам нужно быть особенно внимательным на работе и следить за тем, что и кому вы говорите. Будьте трудолюбивы и сохраняйте своё достоинство.",
    },
    "w": {
        "description": "Богатство – это то, что вы отложили и сберегли. Финансовая свобода идет через финансовые ограничения, финансовое планирование своих трат. Заведите тетрадь расходов, возможно, это поможет вам понять, на что уходят деньги и как избежать ненужных трат. Для хороших заработков нужны хорошие знания. Старайтесь постоянно учиться, читать и расширять кругозор. Если что-то не устраивает – меняйте работу, образ жизни, меняйте себя",
    },
    "c": {
        "description": "Хотим мы этого либо нет, но препятствия – это часть нашей жизни. Они нас преследуют, догоняют для того, чтобы сделать нас сильнее и крепче. К тому же нет таких внешних препятствий, которые были бы созданы без наших собственных внутренних усилий. Просто прекратите в себе сомневаться и настойчиво следуйте за своей мечтой. Если вы любите занятие дизайном, то это дело действительно вам подходит и однажды у вас все получится",
    },
    "h": {
        "description": "Помните, что иногда вещи, даже если они новые, могут нести на себе отрицательную энергию, чтобы от неё избавиться нужно: Возьмите вещь, и засыпьте солью. Оставьте так на сутки, по прошествии этого времени встряхните и носить на здоровье.",
    },
    "t": {
        "description": "Для привлечения денег в дом, рекомендую с каждого полученного дохода нужно стараться откладывать деньги в копилку. Даже если эта сумма будет казаться очень маленькой, всё равно нужно держать в доме отложенные финансы. Они привлекут в дом более крупные деньги.",
    },
    "f": {
        "description": "Любите свою работу. Получайте удовольствие от того, что делаете, и это позволит вам хорошо зарабатывать. Вкладывайте душу и отдавайтесь полностью вашей деятельности и деньги будут к вам идти сами.",
    },
};

// ассоциативный массив с вопросами

const quiz = [
    {
        "q": "Когда вы родились?",
        "a": {
            "w": "Осенью",
            "t": "Зимой",
            "c": "Весной",
            "s": "Летом",
            "h": "В пятницу",
            "f": "Не понял вопроса",
        }
    },
    {
        "q": "На чем отправитесь в путешествие?",
        "a": {
            "w": "На самолете",
            "t": "На поезде",
            "c": "На корабле",
            "s": "На своих двоих",
            "h": "На автомобиле",
            "f": "Пешком",
        }
    },
    {
        "q": "Видели ли вы черную кошку на днях?",
        "a": {
            "w": "У меня живёт черная кошка",
            "t": "Да",
            "c": "Нет",
            "s": "Не помню",
            "h": "Видел толстую кошку",
            "f": "На самолете",
        }
    },
    {
        "q": "Доводилось ли вам сталкиваться с чем-то необъяснимым за этот месяц?",
        "a": {
            "w": "Доводилось",
            "t": "Да, но я думаю, объяснение всё же есть",
            "c": "Точно нет",
            "s": "Не припомню точно, вроде что-то такое было",
            "h": "Точно нет",
            "f": "Нет, но не точно",
        }
    },
    {
        "q": "Какой цвет выберите сегодня: черный или белый?",
        "a": {
            "w": "Черный",
            "t": "Белый",
            "c": "Сегодня ни тот, ни другой",
            "s": "Редко выбираю эти цвета в принципе",
            "h": "Ни тот, ни другой",
            "f": "Серый",
        }
    },
    {
        "q": "Выберите состояние",
        "a": {
            "w": "Грусть",
            "t": "Экстаз",
            "c": "Гнев",
            "s": "Тихая радость",
            "h": "Апатия",
            "f": "Эйфория",
        }
    },
];

const quizSection = document.querySelector('.quiz');

window.onload = function () {
    let result = {};
    let step = 0;

    //функция отрисовки на страницу
    function showQuestion(questionNumber) {
        //функция отрисовки на страницу вопроса
        document.querySelector(".quiz__question").innerHTML = quiz[step]['q'];

        //функция отрисовки на страницу вариантов ответа
        let answer = '';
        for (let key in quiz[step]['a']) {
            answer += `<li data-v="${key}" class="quiz__answer-variant">${quiz[step]['a'][key]}</li>`
        }
        document.querySelector(".quiz__answer").innerHTML = answer;
    }
    if (quizSection) {
        quizSection.addEventListener('click', (evt) => {
            evt.stopPropagation(); // ограничивает распространение события
            if (evt.target.classList.contains('quiz__answer-variant') && step < quiz.length) {
                if (result[evt.target.dataset.v] != undefined) {
                    result[evt.target.dataset.v]++;
                }
                else {
                    result[evt.target.dataset.v] = 0;
                }
                step++;
                if (step == quiz.length) {
                    quizSection.querySelector('.quiz__question').remove();
                    quizSection.querySelector('.quiz__answer').remove();
                    showResult();
                }
                else {
                    showQuestion(step);
                }
            }
        });
        // функция показывающая результат опроса
        function showResult() {
            let key = Object.keys(result).reduce(function (a, b) {
                return result[a] > result[b] ? a : b;
            });
            let div = document.createElement('div');
            div.classList.add('quiz__result');
            quizSection.appendChild(div);

            let p = document.createElement('p');
            p.classList.add('quiz__result-text');
            p.innerHTML = answers[key]['description'];
            div.appendChild(p);

            let button = document.createElement('button');
            button.classList.add('quiz__result-button');
            button.innerHTML = '<span>пройти снова</span>';
            div.appendChild(button);
            let restartButton = quizSection.querySelector('.quiz__result-button');

            restartButton.addEventListener('click', () => {
                quizSection.querySelector('.quiz__result').remove();

                let div1 = document.createElement('div');
                div1.classList.add('quiz__question');
                quizSection.appendChild(div1);

                let div2 = document.createElement('div');
                div2.classList.add('quiz__answer');
                quizSection.appendChild(div2);

                step = 0;
                showQuestion(step);
            })

        }

        showQuestion(step);
    }
}