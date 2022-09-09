import MeteoWidget from '../MeteoWidget/MeteoWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <MeteoWidget city="Paris" code="75001" />
      <MeteoWidget city="Issou" code="78440" />
    </div>
  );
}

export default App;
