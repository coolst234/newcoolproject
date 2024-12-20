const tg = window.Telegram.WebApp;
const greetingElement = document.getElementById('greeting');
const messageElement = document.getElementById('message');
const letterContainer = document.querySelector('.letter-container');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

tg.ready();

const telegramUserId = tg.initDataUnsafe?.user?.id;

// Объект с письмами (замените на вашу логику получения из БД)
const letters = {
    '1239295918': { // Пример telegram_user_id
        greeting: 'Дорогой друг!',
        message: 'С Новым Годом! Желаю тебе волшебства, радости и исполнения самых заветных желаний в этом году. Пусть каждый день будет наполнен улыбками и приятными сюрпризами!',
        date: '20 декабря 2024'
    },
    '987654321': { // Другой пример telegram_user_id
        greeting: 'Здравствуй, замечательный человек!',
        message: 'Поздравляю с наступающим Новым Годом! Пусть этот год принесет тебе крепкое здоровье, благополучие и много счастливых моментов. Верь в чудеса, и они обязательно сбудутся!',
        date: '25 декабря 2024'
    },
    // Добавьте письма для других пользователей, используя их telegram_user_id
};

function displayLetter(telegramUserId) {
    const letter = letters[telegramUserId];
    if (letter) {
        greetingElement.textContent = `!`.replace('!', letter.greeting.split(',')[0]);
        messageElement.textContent = letter.message;
        document.querySelector('.letter-bottom .date').textContent = `Отправлено: ${letter.date}`;
    } else {
        greetingElement.textContent = 'Привет, незнакомец!';
        messageElement.textContent = 'Кажется, у меня нет для тебя персонального письма, но все равно, с Новым Годом!';
    }
}

// Переключение темы
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    themeToggle.textContent = body.classList.contains('light-theme') ? 'Темная тема' : 'Светлая тема';
});

// Запускаем отображение письма
if (telegramUserId) {
    displayLetter(telegramUserId);
} else {
    greetingElement.textContent = 'Ошибка!';
    messageElement.textContent = 'Не удалось получить ваш Telegram ID.';
}
