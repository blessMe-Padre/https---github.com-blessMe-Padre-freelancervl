//задача считается выполненной и исчезает, если юзер кликнул по чекбоксу;

//если все задачи выполнены, появляется сообщение, что больше задач нет;

//если в пустой список добавляется новая задача, сообщение исчезает;

//чтобы добавить новую задачу, надо ввести описание в поле ввода и нажать «Добавить задачу», задача появится в конце списка.

const todo = document.querySelector('.todo');

// это просто проверка есть ли такая секция на странице
if (todo) {
    const list = document.querySelector('.todo-list');
    const items = list.children;
    const emptyListMessage = document.querySelector('.empty-tasks');
    const newItemForm = document.querySelector('.add-form');
    const newItemTitle = newItemForm.querySelector('.add-form-input');

    // шаблон
    const taskTemplate = document.querySelector('#task-template').content;
    const newItemTemplate = taskTemplate.querySelector('.todo-list-item');

    if (list) {

    }

    // сообщение, что больше задач нет
    let toggleEmptyListMessage = function () {
        if (items.length === 0) {
            emptyListMessage.classList.remove('hidden');
        } else {
            emptyListMessage.classList.add('hidden');
        }
    };


    let addCheckHandler = function (item) {
        // Ищем checkbox внутри items
        let checkbox = item.querySelector('.todo-list-input');
        // Отслеживает изменение состояния чекбокса
        checkbox.addEventListener('change', function () {
            item.remove(); //удаляет item по клику на checkbox
            toggleEmptyListMessage();
        });
    };

    for (let i = 0; i < items.length; i++) {
        addCheckHandler(items[i]);
    }

    // обработчик отправки формы
    newItemForm.addEventListener('submit', function (evt) {
        evt.preventDefault(); // отменяет отправку формы по умолчанию

        let taskText = newItemTitle.value; // переменная сохраняет введенный текст из инпута

        // клонирование template
        let task = newItemTemplate.cloneNode(true);
        let taskDescription = task.querySelector('span');
        taskDescription.textContent = taskText;
        addCheckHandler(task);

        list.appendChild(task);
        toggleEmptyListMessage();
        newItemTitle.value = '';
    });
};

