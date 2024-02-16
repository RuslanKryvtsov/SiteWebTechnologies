

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subMenuVisible: false };
  }

  componentDidMount() {
    // Ваш код для отримання даних з API тут
    // Наприклад, fetch або виклик Axios
    // Приклад: fetchData().then(data => console.log(data));
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'Welcome to React Concepts Menu'),
      React.createElement(
        'button',
        {
          onClick: () =>
            this.setState((prevState) => ({
              subMenuVisible: !prevState.subMenuVisible,
            })),
        },
        'Toggle Submenu'
      ),
      this.state.subMenuVisible &&
        React.createElement(
          'div',
          { style: { border: '1px solid #ccc', padding: '10px' } },
          React.createElement('h2', null, 'React Concepts'),
          React.createElement(
            'ul',
            null,
            React.createElement('li', null, 'Components'),
            React.createElement('li', null, 'Props'),
            React.createElement('li', null, 'State'),
            React.createElement('li', null, 'Hooks')
          )
        )
      // Інші елементи користувацького інтерфейсу
    );
  }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App));


