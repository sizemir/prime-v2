javascript

// Получаем все элементы с классом 'computer-type'
const computerTypes = document.querySelectorAll('.computer-type');

// Добавляем обработчики событий для каждого элемента
computerTypes.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#444444'; // Светлее фон при наведении
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '#333333'; // Возвращаемся к исходному фону
    });
});
window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Если прокрутка больше 50 пикселей
        header.style.backgroundColor = 'rgba(182, 78, 100, 0.8)'; // Полупрозрачный красный фон
    } else {
        header.style.backgroundColor = 'rgba(182, 4, 42, 1)'; // Полностью красный фон
    }
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-background h2');
    const heroParagraph = document.querySelector('.hero-background p');

    heroText.style.opacity = 0;
    heroParagraph.style.opacity = 0;

    setTimeout(() => {
        heroText.style.transition = 'opacity 1s ease';
        heroParagraph.style.transition = 'opacity 1s ease';
        heroText.style.opacity = 1;
        heroParagraph.style.opacity = 1;
    }, 500); // Задержка перед началом анимации
});
window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Если прокрутка больше 50 пикселей
        header.style.backgroundColor = 'rgba(182, 4, 42, 0.8)'; // Полупрозрачный красный фон
    } else {
        header.style.backgroundColor = 'rgba(182, 4, 42, 1)'; // Полностью красный фон
    }
});