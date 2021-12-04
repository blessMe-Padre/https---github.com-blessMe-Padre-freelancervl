const answers = {
    "s": {
        "description": " ОТВЕТ 1S Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid optio totam provident dolor minima magni quod numquam placeat quo!",
    },
    "w": {
        "description": " ОТВЕТ 2W Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid optio totam provident dolor minima magni quod numquam placeat quo!",
    },
    "c": {
        "description": " ОТВЕТ 3C Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid optio totam provident dolor minima magni quod numquam placeat quo!",
    },
    "h": {
        "description": " ОТВЕТ 4H Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid optio totam provident dolor minima magni quod numquam placeat quo!",
    },
    "t": {
        "description": " ОТВЕТ 5T Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid optio totam provident dolor minima magni quod numquam placeat quo!",
    },
    "f": {
        "description": " ОТВЕТ 6F Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid optio totam provident dolor minima magni quod numquam placeat quo!",
    },
};

// ассоциативный массив с вопросами

const quiz = [
    {
        "q": "Вопрос 1",
        "a": {
            "w": "ответ w",
            "t": "ответ t",
            "c": "ответ c",
            "s": "ответ s",
            "h": "ответ h",
            "f": "ответ f",
        }
    },
    {
        "q": "Вопрос 2",
        "a": {
            "w": "ответ w",
            "t": "ответ t",
            "c": "ответ c",
            "s": "ответ s",
            "h": "ответ h",
            "f": "ответ f",
        }
    },
    {
        "q": "Вопрос 3",
        "a": {
            "w": "ответ w",
            "t": "ответ t",
            "c": "ответ c",
            "s": "ответ s",
            "h": "ответ h",
            "f": "ответ f",
        }
    },
    {
        "q": "Вопрос 4",
        "a": {
            "w": "ответ w",
            "t": "ответ t",
            "c": "ответ c",
            "s": "ответ s",
            "h": "ответ h",
            "f": "ответ f",
        }
    },
    {
        "q": "Вопрос 5",
        "a": {
            "w": "ответ w",
            "t": "ответ t",
            "c": "ответ c",
            "s": "ответ s",
            "h": "ответ h",
            "f": "ответ f",
        }
    },
    {
        "q": "Вопрос 6",
        "a": {
            "w": "ответ w",
            "t": "ответ t",
            "c": "ответ c",
            "s": "ответ s",
            "h": "ответ h",
            "f": "ответ f",
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