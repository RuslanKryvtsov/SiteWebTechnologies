document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];

  // Обробник події для радіокнопок
  document.querySelectorAll('input[name="tcp-level"]').forEach(function(radioButton) {
      radioButton.addEventListener("change", function(event) {
          const selectedValue = event.target.value;
          const description = getLevelDescription(selectedValue);
          document.getElementById("modal-description").innerText = description;
          modal.style.display = "block";
      });
  });

  // Обробник події для закриття модального вікна
  span.onclick = function() {
      modal.style.display = "none";
  };

  // Закриття модального вікна при кліку поза ним
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
});

// Функція для отримання опису для вибраного рівня
function getLevelDescription(level) {
  switch (level) {
      case "1":
          return "Рівень 1: Фізичний рівень - Визначає електричні та фізичні характеристики пристроїв. На цьому рівні передаються біти через фізичні канали зв'язку. Приклади пристроїв на цьому рівні: мережні кабелі, концентратори, повторювачі тощо.";
      case "2":
          return "Рівень 2: Рівень з'єднання даних - Відповідає за безпомилкову передачу кадрів даних. Цей рівень вирішує проблеми, такі як керування доступом до мережі, виявлення та виправлення помилок в передачі даних. Приклади пристроїв на цьому рівні: мережні комутатори, мережні мости, точки доступу Wi-Fi тощо.";
      case "3":
          return "Рівень 3: Мережевий рівень - Відповідає за маршрутизацію та логічну адресацію. На цьому рівні визначаються шляхи, по яких будуть передаватися дані, а також вирішуються питання адресації та маршрутизації. Приклади пристроїв на цьому рівні: маршрутизатори, шлюзи, Level 3 комутатори тощо.";
      case "4":
          return "Рівень 4: Транспортний рівень - Управляє зв'язком з кінцями, забезпечує цілісність даних та керування потоками. Цей рівень відповідає за ефективну передачу даних між кінцями зв'язку та вирішує питання управління потоками та контролю цілісності даних. Приклади протоколів на цьому рівні: TCP (Transmission Control Protocol), UDP (User Datagram Protocol) тощо.";
      case "5":
          return "Рівень 5: Прикладний рівень - Надає мережні сервіси безпосередньо кінцевим користувачам. На цьому рівні працюють програми та протоколи, які надають зручний інтерфейс для взаємодії користувача з мережею. Приклади протоколів та служб на цьому рівні: HTTP (Hypertext Transfer Protocol), FTP (File Transfer Protocol), SMTP (Simple Mail Transfer Protocol) тощо.";
      default:
          return "Опис недоступний.";
  }
}