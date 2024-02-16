
import ReactDOM from 'react-dom';
import StateAndPropsDemo from './StateAndPropsDemo';  // Шлях до вашого компонента
import React, { useState, useEffect } from "react";

ReactDOM.render(
  <React.StrictMode>
    <StateAndPropsDemo />
  </React.StrictMode>,
  document.getElementById('root')
);        

const StateAndPropsDemo = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("World");

  useEffect(() => {
    // Реєструємо слухач подій для кнопки
    const button = document.getElementById("increment-button");
    button.addEventListener("click", () => setCounter(counter + 1));
  }, []);

  return (
    <div>
      <h1>State та props</h1>
      <h2>State</h2>
      <p>
        State - це змінна, яка зберігається в компоненті.
        Ви можете використовувати state для зберігання інформації, яка змінюється в ході виконання компонента.
      </p>
      <p>
        У цьому прикладі ми використовуємо state для зберігання значення лічильника.
        Користувачі можуть збільшувати або зменшувати значення лічильника, натиснувши кнопки.
      </p>
      <div>
        <p>Значення лічильника: {counter}</p>
        <button id="increment-button">Збільшити</button>
        <button id="decrement-button">Зменшити</button>
      </div>
      <h2>Props</h2>
      <p>
        Props - це змінні, які передаються компоненту ззовні.
        Ви можете використовувати props для отримання інформації з інших компонентів або з даних API.
      </p>
      <p>
        У цьому прикладі ми використовуємо props для зберігання імені користувача.
        Ми можемо використовувати це ім'я для персоналізації інтерфейсу користувача.
      </p>
      <p>
        Ім'я користувача: <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              // Не відправляти значення в компонент
            }
          }}
        />
      </p>
    </div>
  );
};     
export default StateAndPropsDemo;  

