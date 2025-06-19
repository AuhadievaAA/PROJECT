'use strict'
document.addEventListener("DOMContentLoaded", () => {

   /*2. Создание слайдер-карусели новостей главной страницы. */

   const reviews = document.querySelector('.new__wrap');       // создаем переменную находя блок по классу

   if (reviews) {                                           // проверяем существование элемента в DOM
       console.log('Константа new существует');

       /* 
       *   Алгоритм
       *
       *   1. Начало.
       *   2. Просмотр трех отзывов одновременно (создание переменной, которая не будет меняться).
       *   3. Проверка условия (ожидание клика на нажатие на стрелку): если отзывы прокручиваются.
       *       3.1. Да: Получаем 3 новых новости (создание переменной, которая будет меняться).
       *       3.2. Нет: Конец
       *   4. Конец
       * 
       *   Блок-схема: /images/block-schema.png
       */
    let currentIndex = 0; //индекс карточек
    const slider = document.querySelectorAll(".new__div");
    const prevButton = document.querySelector(".new__button-left");
    const nextButton = document.querySelector(".new__button-right");
    const visibleCards = 3; //количество отображаемых карточек
    updateSlider();
    //
    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex = currentIndex - 3;
        } else {
            currentIndex = slider.length - visibleCards; // Переход к последним карточкам
        }
        updateSlider();
    });
    //
    nextButton.addEventListener("click", () => {
        if (currentIndex < slider.length - visibleCards) {
            currentIndex = currentIndex + 3;
        } else {
            currentIndex = 0; // Переход к началу карточек
        }
        updateSlider();
    });
    function updateSlider() {
        slider.forEach((item, index) => {
            // Проверяем, нужно ли показывать карточку
            if (index >= currentIndex && index < currentIndex + visibleCards) {
                item.style.display = 'block'; // Показываем карточку
            } else {
                item.style.display = 'none'; // Скрываем карточку
            }
        });
    }
    }
});

    // 3. Динамическая загрузка списка услуг из массива объектов и отображения их на главной странице.

   /* Лекция 4 */
    
//     const cardsContainer = document.querySelector('#cards');

//    if (cardsContainer) {

//    const dataTitleCards = ['Узи кошек и собак от 450 рублей', 'Вакцинация от 1230 рублей', 'Кастрация и стерилизация от 1750 рублей'];

//    const titleCards = cardsContainer.querySelectorAll('.popular-services__text');

//     console.log(titleCards); // проверка в консоли

//     titleCards.forEach((item, index) => {
//      item.textContent = dataTitleCards[index];
//     });

//     }

    /* Лекция 5 */
    
    // const cardsContainer = document.querySelector('#cards');
    // if (cardsContainer) {
    //     const cardList = cardsContainer.querySelector('.popular-services__container');

    //     /* Моковые данные */
    //     const cardsData = {
    //         card1: {
    //             description: 'Узи кошек и собак от 450 рублей',
    //             image: 'images/UltrasoundScan.jpg',
    //             imageWidth: 120,
    //             imageHeight: 120,
    //             imageAlt: 'узи кошек и собак', 
    //         },
    //         card2: {
    //             description: 'Вакцинация от 1230 рублей',
    //             image: 'images/vaccination.jpg',
    //             imageWidth: 120,
    //             imageHeight: 120,
    //             imageAlt: 'вакцинация', 
    //         },
    //         card3: {
    //            description: 'Кастрация и стерилизация от 1750 рублей',
    //             image: 'images/castration.jpg',
    //             imageWidth: 120,
    //             imageHeight: 120,
    //             imageAlt: 'Кастрация и стерилизация', 
    //         }
    //     }
    //     // Функция для создания карточки
    //     const createCard = (description, imageUrl, imageWidth, imageHeight, imageAlt) => {
    //         const card = `
    //             <div class="popular-services__div">
    //                 <img class="popular-services__image" src="${imageUrl}" alt="${imageAlt}" width="${imageWidth}" height="${imageHeight}">
    //                 <p class="popular-services__text">${description}</p>
    //             </div>

    //         `; 

    //         return card;
    //     }

    //     for (const cardKey in cardsData) {
    //         const card = cardsData[cardKey];
 
    //         const cardElement = createCard(card.description, card.image, card.imageWidth, card.imageHeight, card.imageAlt);
    //         cardList.insertAdjacentHTML('beforeend', cardElement);
    //     }
    // }

    // /* Лекция 6 */
    const cardsContainer = document.querySelector('#cards');
    if (cardsContainer) {
        const cardList = cardsContainer.querySelector('.popular-services__container');

        // Пример URL для получения данных с сервера
        const apiUrl = 'data.json';

        // Функция для создания карточки
        const createCard = (description, imageUrl, imageWidth, imageHeight, imageAlt) => {

            // Шаблонные строки и подстановки
            const card = `
                 <div class="popular-services__div">
                     <img class="popular-services__image" src="${imageUrl}" alt="${imageAlt}" width="${imageWidth}" height="${imageHeight}">
                     <p class="popular-services__text">${description}</p>
                 </div>

            `; 

            return card;
        }

        // Загрузка данных с сервера
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Данные
                console.log(typeof (data)); // Тип полученных данных

                data.forEach(text => {
                    const cardElement = createCard(text.description, text.image, text.imageWidth, text.imageHeight, text.imageAlt);
                    cardList.insertAdjacentHTML('beforeend', cardElement);
                });
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }

    /* 7. Появление форм */

    const loginHeaderButton = document.querySelector('.header__login');
    const dialogLayout = document.querySelector('.dialog');

    if (loginHeaderButton && dialogLayout) {
        const closeDialogButtons = dialogLayout.querySelectorAll('[data-close]');
        const selectPopup = dialogLayout.querySelector('#popup-select');
        const loginPopup = dialogLayout.querySelector('#popup-login');
        const registrationPopup = dialogLayout.querySelector('#popup-registration');
        const switchToRegisterButtons = dialogLayout.querySelectorAll('[data-registration]');
        const switchToLoginButtons = dialogLayout.querySelectorAll('[data-login]');

        // Открытие модального окна при клике на кнопку "Войти"
        loginHeaderButton.addEventListener('click', () => {
            dialogLayout.removeAttribute('hidden');
        });

        // Закрытие модального окна при клике на кнопку закрытия
        if (closeDialogButtons) {
            closeDialogButtons.forEach(button => {
                button.addEventListener('click', () => {
                    dialogLayout.setAttribute('hidden', true);
                    selectPopup.removeAttribute('hidden');
                    loginPopup.setAttribute('hidden', true);
                    registrationPopup.setAttribute('hidden', true);
                });
            });
        }

        // Закрытие модального окна при клике вне его области
        window.addEventListener('click', (event) => {
            if (event.target === dialogLayout) {
                dialogLayout.setAttribute('hidden', true);
                selectPopup.removeAttribute('hidden');
                loginPopup.setAttribute('hidden', true);
                registrationPopup.setAttribute('hidden', true);
            }
        });

        // Переключение на форму регистрации
        if (registrationPopup) {
            switchToRegisterButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    selectPopup.setAttribute('hidden', true);
                    loginPopup.setAttribute('hidden', true);
                    registrationPopup.removeAttribute('hidden');
                });
            });
        }

        // Переключение на форму входа
        if (loginPopup) {
            switchToLoginButtons.forEach(button => {
                button.addEventListener('click', (event) => {
                    event.preventDefault();
                    selectPopup.setAttribute('hidden', true);
                    registrationPopup.setAttribute('hidden', true);
                    loginPopup.removeAttribute('hidden');

                    // Проверяем, есть ли сохраненный логин в localStorage
                    if (localStorage.getItem('login')) {
                        // Находим поле ввода логина
                        const loginField = document.querySelector('#userlogin');

                        // Устанавливаем значение поля из localStorage
                        loginField.value = localStorage.getItem('login');
                    }
                });
            });
        }

        // Отправка данных на форме регистрации
        registrationPopup.addEventListener('submit', event => {
            event.preventDefault(); // Предотвращаем отправку формы

            const username = registrationPopup.querySelector('#username').value;
            const login = registrationPopup.querySelector('#login').value;
            const email = registrationPopup.querySelector('#email').value;
            const password = registrationPopup.querySelector('#password').value;
            const confirmPassword = registrationPopup.querySelector('#confirm-password').value;

            const errorMessage = registrationPopup.querySelector('#error-message');

            if (password !== confirmPassword) {
                errorMessage.textContent = 'Пароли не совпадают';
                errorMessage.style.color = 'red';
                return;
            }

            if (username.length < 3) {
                errorMessage.textContent = 'Имя пользователя должно содержать не менее 3 символов';
                return;
            }

            if (password.length < 8) {
                errorMessage.textContent = 'Пароль должен содержать не менее 8 символов';
                return;
            }

            // Здесь можно добавить отправку данных на сервер
            errorMessage.textContent = 'Регистрация прошла успешно!';
            errorMessage.style.color = 'green';

            // Запишем логин
            window.localStorage.setItem("login", login);

            // Очистка формы
            document.getElementById('registration-form').reset();
        });

        loginPopup.addEventListener('submit', event => {
            event.preventDefault(); // Предотвращаем отправку формы

            const loginField = loginPopup.querySelector('#userlogin').value;
            const passwordField = loginPopup.querySelector('#userpassword').value;

            const errorMessage = loginPopup.querySelector('#error-message-login');

            const users = {
                'test': '12345678',
                'student': '0987654321',
            }

            if (users.hasOwnProperty(loginField) && users[loginField] === passwordField) {
                // Здесь можно добавить отправку данных на сервер
                errorMessage.textContent = 'Вход выполнен успешно';
                errorMessage.style.color = 'green';

                loginHeaderButton.remove();

                const userHeader = `
                    <span class="header__user">Пользователь: ${loginField}</span>
                    `;

                header.insertAdjacentHTML('beforeend', userHeader);

                setTimeout(() => {
                    dialogLayout.setAttribute('hidden', true);
                    selectPopup.removeAttribute('hidden');
                    loginPopup.setAttribute('hidden', true);
                    registrationPopup.setAttribute('hidden', true);

                    document.getElementById('login-form').reset();
                }, 3000);
            } else {
                errorMessage.textContent = 'Пользователь с таким логином и паролем не найден!';
                errorMessage.style.color = 'red';
            }
        });
    }

    // Preloader страницы

    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    if (preloader && content) {
        setTimeout(() => {
            // Скрываем прелоадер
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            // Показываем контент
            content.style.display = 'block';

            // Удаляем элемент из DOM
            preloader.remove();
        }, 3000); // Задержка 3 секунды
    }

     // Карусель (слайдер)
     const slider = document.querySelector('.swiper');

     if (slider) {
         const swiper = new Swiper(slider, {
             // Дополнительные параметры
             slidesPerView: 3, // Количество слайдов на экране
             spaceBetween: 30, // Расстояние между слайдами
             loop: true,  // Зацикливание слайдов
 
             // Пагинация
             pagination: {
                 el: '.swiper-pagination',
             },
 
             // Навигационные стрелки
             navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
             },
         });
     }
