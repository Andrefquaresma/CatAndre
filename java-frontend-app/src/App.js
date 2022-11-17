import './App.css';
import ApiCall from './ApiCall';
import person from './person.png'

function App() {
  return (
    <div className="AppCustomer">
      <header className='App-header'>
        <img src={person} height = "100"></img>
        <div>
          <h2 className='AppName'>Customer App</h2>
        </div>
        <div className='Api'>
          <ApiCall></ApiCall>
        </div>
      
      </header>
     
    </div>
  );
}

export default App;
