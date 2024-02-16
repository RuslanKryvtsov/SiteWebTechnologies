// script.js

function submitForm() {
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      login: document.getElementById('login').value,
      password: document.getElementById('password').value
    };
  
    console.log('Форма відправлена:', formData);
  
    // Відправка на сервер
    fetch('/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Відповідь від сервера:', data);
      // Тут можна обробляти відповідь від сервера
    })
    .catch(error => console.error('Помилка при відправці на сервер:', error));
  }
  