import './App.css';

function App() {
  const name = 'Chandler';
  const header = (
    <header class='App-shell'>
      <h1>site header</h1>
    </header>
  );
  const element = <h1>Hello, {name}!</h1>;
  const footer = <footer class='App-shell'>site footer</footer>;
  const appShell = <div class='App-shell'>{header} {element} {element} {footer}</div>

  return ( appShell );
}

export default App;
