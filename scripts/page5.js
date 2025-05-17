document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedback-form');
    const formMessage = document.getElementById('form-message');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        simulateFormSubmission()
            .then(() => {
                formMessage.classList.remove('hidden'); 
                feedbackForm.reset();
            })
            .catch(error => {
                console.error("Ошибка при отправке формы:", error);
                alert("Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.");
            });
    });

   
    function simulateFormSubmission() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               
                resolve(); 
               
            }, 1000);
        });
    }
});