window.onload = function () {
    let data = {
        idCart: "-1",
        mainTitle: `Лучшие отечесвтенные аналоги!<br>
        Выберите категорию, к которой принадлежит продукт.`
    };

    const database = {
        '0': [{img_path: "image/0/0.webp",
            text: 'Яндекс.Документы', path: "https://docs.yandex.ru/"},
            {img_path: "image/0/1.webp",
            text: 'МойОфис', path: "https://myoffice.ru/"},
            {img_path: "image/0/2.webp",
            text: 'WPS Office', path: "http://www.wps.com/ru-RU/"}
        ],
        '1': [{img_path: "image/1/0.webp",
        text: 'ВКонтакте', path: "https://vk.com/"},
        {img_path: "image/1/1.webp",
        text: 'Одноклассники', path: "https://ok.ru/"},
        {img_path: "image/1/2.webp",
        text: 'RUTUBE', path: "https://rutube.ru/"},
        {img_path: "image/1/3.webp",
        text: 'Яндекс.Дзен', path: "https://zen.yandex.ru/"},
        {img_path: "image/1/4.webp",
        text: 'Telegram', path: "https://telegram.org/"}
        ],
        '2': [{img_path: "image/2/0.webp",
        text: 'КиноПоиск HD', path: "https://hd.kinopoisk.ru/"},
        {img_path: "image/2/1.webp",
        text: 'Okko', path: "https://okko.tv/"},
        {img_path: "image/2/2.webp",
        text: 'IVI', path: "https://www.ivi.ru/"},
        {img_path: "image/2/3.webp",
        text: 'Premier', path: "https://premier.one/"},
        {img_path: "image/2/4.webp",
        text: 'Amediateka', path: "https://www.amediateka.ru/"},
        {img_path: "image/2/5.webp",
        text: 'KION', path: "https://kion.ru/home"},
        {img_path: "image/2/6.webp",
        text: 'More.tv', path: "https://more.tv/"},
        {img_path: "image/2/7.webp",
        text: 'START', path: "https://start.ru/"}
        ],
        '3': [{img_path: "image/3/0.webp",
        text: 'Яндекс.Браузер', path: "https://browser.yandex.ru/"},
        {img_path: "image/3/1.webp",
        text: 'Атом', path: "https://browser.ru/"},
        {img_path: "image/3/2.webp",
        text: 'Спутник', path: "https://sputnik-lab.com/"}
        ],
        '4': [{img_path: "image/4/0.webp",
        text: 'Яндекс.Музыка', path: "https://music.yandex.ru/"},
        {img_path: "image/4/1.webp",
        text: 'VK Музыка', path: "https://boom.ru/"},
        {img_path: "image/4/2.webp",
        text: 'Сбер Звук', path: "https://zvuk.com/"}
        ],
        '5': [{img_path: "image/5/0.webp",
        text: 'Яндекс.Календарь', path: "https://calendar.yandex.ru/"},
        {img_path: "image/5/1.webp",
        text: 'Yandex Cloud', path: "https://cloud.yandex.ru/"},
        {img_path: "image/5/2.webp",
        text: 'Яндекс.Диск', path: "https://disk.yandex.ru/"},
        {img_path: "image/5/3.webp",
        text: 'Yandex Forms', path: "https://cloud.yandex.ru/services/forms"},
        {img_path: "image/5/4.webp",
        text: 'API Яндекс.Карт', path: "https://yandex.ru/dev/maps/"}
        ],
        '6': [{img_path: "image/6/0.webp",
        text: 'Яндекс.Диалоги', path: "https://dialogs.yandex.ru/"},
        {img_path: "image/6/1.webp",
        text: 'СберБизнесБот', path: "https://sberbb.ru/"},
        {img_path: "image/6/2.webp",
        text: 'Robochat', path: "https://robochat.io/"},
        {img_path: "image/6/3.webp",
        text: 'Яндекс Serverless', path: "https://cloud.yandex.ru/solutions/serverless-chatbots"}
        ],
        '7': [{img_path: "image/7/0.webp",
        text: 'Яндекс.Мессенджер', path: "https://yandex.ru/messenger/"},
        {img_path: "image/7/1.webp",
        text: 'ICQ', path: "https://icq.com/"},
        {img_path: "image/7/2.webp",
        text: 'VK Teams', path: "https://biz.mail.ru/myteam/"},
        {img_path: "image/7/3.webp",
        text: 'ТамТам', path: "https://tamtam.chat/"}
        ],
        '8': [{img_path: "image/8/0.webp",
        text: 'REG.RU', path: "https://www.reg.ru/web-sites/"},
        {img_path: "image/8/1.webp",
        text: 'Tilda', path: "https://tilda.cc/ru/"},
        {img_path: "image/8/2.webp",
        text: 'Flexbe', path: "https://flexbe.ru/"}
        ],
        '9': [{img_path: "image/9/0.webp",
        text: 'Яндекс.Услуги', path: "https://uslugi.yandex.ru/"},
        {img_path: "image/9/1.webp",
        text: 'Kwork', path: "https://kwork.ru/"},
        {img_path: "image/9/2.webp",
        text: 'Хабр Фриланс', path: "https://freelance.habr.com/"},
        {img_path: "image/9/3.webp",
        text: 'Workzilla', path: "https://work-zilla.com/"}
        ],
        '10': [{img_path: "image/10/0.webp",
        text: 'RUTUBE', path: "https://rutube.ru/"},
        {img_path: "image/10/1.webp",
        text: 'VK Видео', path: "https://vk.com/video"},
        {img_path: "image/10/2.webp",
        text: 'Яндекс.Дзен', path: "https://zen.yandex.ru/"}
        ],
        '11': [{img_path: "image/11/0.webp",
        text: 'Supa', path: "https://supa.ru/"},
        {img_path: "image/11/1.webp",
        text: 'Lunacy', path: "https://icons8.ru/lunacy"},
        {img_path: "image/11/2.webp",
        text: 'Zeplin', path: "https://zeplin.io/"},
        {img_path: "image/11/3.webp",
        text: 'GIMP', path: "https://www.gimp.org/"}
        ],
        '12': [{img_path: "image/12/0.webp",
        text: 'Аврора', path: "https://auroraos.ru/"},
        {img_path: "image/12/1.webp",
        text: 'Linux', path: "https://www.kernel.org/"},
        {img_path: "image/12/2.webp",
        text: 'Ubuntu', path: "https://ubuntu.com/"}
        ],
        '13': [{img_path: "image/13/0.webp",
        text: 'Яндекс.Телемост', path: "https://telemost.yandex.ru/"},
        {img_path: "image/13/1.webp",
        text: 'VK Звонки', path: "https://vk.com/video-calls"},
        {img_path: "image/13/2.webp",
        text: 'iMind', path: "https://imind.ru/"}
        ],
        '14': [{img_path: "image/14/0.webp",
        text: 'Яндекс.Метрика', path: "https://metrika.yandex.ru/"},
        {img_path: "image/14/1.webp",
        text: 'Roistat', path: "https://roistat.com/ru/"}
        ]
    }

    var carts = document.querySelector('.main__carts');

    const menuOpen = document.querySelector('.menu__open');
    const menuClose = document.querySelector('.menu__close');
    const headerTitle = document.querySelector('.header__title');
    const menu = document.querySelector('.menu__body');
    const darkening = document.querySelector('.grey_background');
    
    document.addEventListener('click', documentActions);
    function documentActions(e) {
        const targetElement = e.target;
        if (targetElement.closest('.menu__open') || targetElement.closest('.menu__close') || targetElement.closest('.grey_background')) {
            document.body.classList.toggle('_scroll_off');
            menuOpen.classList.toggle('_active');
            menuClose.classList.toggle('_active');
            headerTitle.classList.toggle('_active');
            menu.classList.toggle('_active');
            darkening.classList.toggle('_active');
        } else if (targetElement.closest('.menu__flexbox__block')) {
            document.body.classList.remove('_scroll_off');
            menuOpen.classList.remove('_active');
            menuClose.classList.remove('_active');
            headerTitle.classList.remove('_active');
            menu.classList.remove('_active');
            darkening.classList.remove('_active');

            if (data.idCart != '-1' || data.idCart == targetElement.id) {
                const cartNonActivate = document.getElementById(data.idCart);
                cartNonActivate.classList.remove('_choice');
                carts.innerHTML = '';
            }
            if (data.idCart != targetElement.id) {
                targetElement.classList.add('_choice');
                data = {
                    idCart: targetElement.id,
                    mainTitle: targetElement.innerHTML
                }
                document.querySelector('h1').innerHTML = data.mainTitle;
                for (key in database[data.idCart]) {
                    var cart = document.createElement('a');
                    cart.setAttribute('class', 'main__cart');
                    cart.setAttribute('href', database[data.idCart][key].path);
                    console.log(database[data.idCart][key].img_path)
                    cart.innerHTML = `
                    <div class="main__cart__img _ibg">
                        <img src="${database[data.idCart][key].img_path}" alt="Error">
                    </div>
                    <div class="main__cart__title">
                        ${database[data.idCart][key].text}
                    </div>
                    `;
                    carts.appendChild(cart);
                }

            } else {
                data = {
                    idCart: "-1",
                    mainTitle: `Лучшие отечесвтенные аналоги!<br>
                    Выберите категорию, к которой принадлежит продукт.`                
                }
                carts.innerHTML = '';
                document.querySelector('h1').innerHTML = data.mainTitle;
            }
        }

    // Меню

    // const menuOpen = document.querySelector('.menu__open');
    // const menuClose = document.querySelector('.menu__close');
    // const headerTitle = document.querySelector('.header__title');
    // const menu = document.querySelector('.menu__body');
    // const darkening = document.querySelector('.grey_background');
    // if (menuOpen && menuClose) {
    //     menuOpen.addEventListener('click', function (e) {
    //         document.body.classList.add('_scroll_off');
    //         menuOpen.classList.add('_active');
    //         menuClose.classList.add('_active');
    //         headerTitle.classList.add('_active');
    //         menu.classList.add('_active');
    //         darkening.classList.add('_active');
    //     });
        
    //     menuClose.addEventListener('click', function (e) {
    //         document.body.classList.remove('_scroll_off');
    //         menuOpen.classList.remove('_active');
    //         menuClose.classList.remove('_active');
    //         headerTitle.classList.remove('_active');
    //         menu.classList.remove('_active');
    //         darkening.classList.remove('_active');
    //     });

    //     darkening.addEventListener('click', function (e) {
    //         document.body.classList.remove('_scroll_off');
    //         menuOpen.classList.remove('_active');
    //         menuClose.classList.remove('_active');
    //         headerTitle.classList.remove('_active');
    //         menu.classList.remove('_active');
    //         darkening.classList.remove('_active');
    //     });

    }
}