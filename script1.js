// script1.js, Comments

function submitCommentsForm() {
    const formData = {
      Comments: document.getElementById('Comments').value,
      
    };
  
    console.log('Коментар відправлений:', formData);
  
    // Відправка на сервер
    fetch('/submit-comments', {
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
  