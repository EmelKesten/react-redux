import './App.css';
import Form from './Components/Form';
import showName from './Components/showName';

function App() {
  return (
    <div>
      <Form/>
      <button onClick={showName}>Show name</button>
    </div>
  );
}

export default App;
