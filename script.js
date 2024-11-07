// Функція для зміни мови
function changeLanguage(language) {
    document.querySelectorAll('[data-lang-uk]').forEach(element => {
        const translation = element.getAttribute(`data-lang-${language}`);
        if (translation) {
            element.textContent = translation;
        }
    });
}

// Функція для автоматичного встановлення англійської мови при завантаженні
window.onload = function() {
    changeLanguage('en'); // Встановлюємо англійську як мову за замовчуванням
};

// Отримуємо кнопку
var mybutton = document.getElementById("scrollTopBtn");

// Функція для показу кнопки при прокручуванні сторінки
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";  // Показати кнопку
    } else {
        mybutton.style.display = "none";   // Приховати кнопку
    }
};

// Функція для прокручування сторінки до верху
mybutton.onclick = function() {
    document.body.scrollTop = 0;  // Для Safari
    document.documentElement.scrollTop = 0;  // Для Chrome, Firefox, IE та Opera
}
