form.onsubmit = () => {
    if (form.checkValidity()) {
        alert(
            `Спасибо за обратную связь, ${form.name.value}! Ваш вопрос отправлен!`
        );
    }
};