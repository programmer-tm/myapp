import './App.css';
import Message from './Message';

function App() {
  const name = "Sergey";
  return (
    <div className="App">
      <Message name={name}/>
      <p>I see you!</p>
    </div>
  );
}

export default App;