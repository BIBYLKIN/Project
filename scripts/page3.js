let currentIndex = 0; // Текущий индекс активного изображения в галерее
const images = document.querySelectorAll('.gallery-item'); // Получаем все элементы галереи
const totalImages = images.length; // Общее количество изображений в галерее
const gallery = document.querySelector('.gallery'); // Получаем контейнер галереи
const galleryContainer = document.querySelector('.gallery-container'); // Получаем контейнер галереи
let autoScrollInterval; // Переменная для хранения интервала автоматической прокрутки

// Функция для обновления галереи
function updateGallery() {
    const offset = -currentIndex * 100; // Вычисляем смещение для текущего изображения
    gallery.style.transform = `translateX(${offset}%)`; // Применяем смещение к галерее
}
// Переключение на следующее изображение
function nextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++; // Увеличиваем индекс, если не достигли конца галереи
    } else {
        currentIndex = 0; // Возвращаемся к первому изображению, если достигли конца
    }
    updateGallery(); // Обновляем галерею
}

// Переключение на предыдущее изображение
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--; // Уменьшаем индекс, если не достигли начала галереи
    } else {
        currentIndex = totalImages - 1; // Переходим к последнему изображению, если достигли начала
    }
    updateGallery(); // Обновляем галерею
}

// Обработка кликов по кнопкам
document.getElementById('nextButton').addEventListener('click', nextImage); // Переключение на следующее изображение при клике
document.getElementById('prevButton').addEventListener('click', prevImage); // Переключение на предыдущее изображение при клике

// Функция для автоматического пролистывания 
function startAutoScroll() {

    autoScrollInterval = setInterval(() => {
        nextImage(); // Переключаем на следующее изображение
    }, 10000); // Пролистывание каждые 5 секунд

}
// Функция для остановки автоматического пролистывания
function stopAutoScroll() {

    clearInterval(autoScrollInterval); // Останавливаем интервал автоматической прокрутки
}

// Запуск автоматического пролистывания при загрузке страницы 
  startAutoScroll();


// Остановка автоматического пролистывания при наведении мыши на галерею
galleryContainer.addEventListener('mouseenter', () => {
    stopAutoScroll();// Останавливаем автоматическую прокрутку
});

// Возобновление автоматического пролистывания при убирании мыши с галереи 
galleryContainer.addEventListener('mouseleave', () => { 
    startAutoScroll(); // Возобновляем автоматическую прокрутку
});
