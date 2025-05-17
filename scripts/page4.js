
document.addEventListener('DOMContentLoaded', function() {
    const trackingForm = document.getElementById('tracking-form');
    const trackingResult = document.getElementById('tracking-result');
    const orderStatus = document.getElementById('order-status');

    trackingForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const orderId = document.getElementById('order-id').value;

      

        
        simulateOrderStatus(orderId)
            .then(status => {
                orderStatus.textContent = status;
                trackingResult.classList.remove('hidden'); 
            })
            .catch(error => {
                orderStatus.textContent = "Ошибка при получении статуса заказа.";
                trackingResult.classList.remove('hidden');
                console.error(error);
            });
    });


    function simulateOrderStatus(orderId) {
        return new Promise((resolve, reject) => {
           
            setTimeout(() => {
                
                if (orderId === "12345") {
                    resolve("Ваш заказ принят и готовится.");
                } else if (orderId === "67890") {
                    resolve("Ваш заказ в пути. Ожидаемое время прибытия: 15 минут.");
                } else {
                    reject("Заказ не найден.");
                }
            }, 1500); 
        });
    }
});