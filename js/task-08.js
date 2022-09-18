const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();


    const email = event.target.email.value;
    const password = event.target.password.value;
    const elements = { email, password };

    if (email === '' || password === '') {
        alert('Все поля должны быть заполнены. Пожалуйста, заполните поля');
    } else {
        console.log(elements);
        event.currentTarget.reset();
    }
        
}

