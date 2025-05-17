document.addEventListener('DOMContentLoaded', function() {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const texts = ["Нажми меня", "Спасибо!", "Еще раз!", "Готово!"]; 
    let currentIndex = 0;

    changeTextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % texts.length; 
        changeTextBtn.textContent = texts[currentIndex]; 
    });
});

