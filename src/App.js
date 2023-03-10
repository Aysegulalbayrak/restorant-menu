import logo from './logo.svg';
import './App.css';
import Sidebar from './Compenents/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='row d-flex justify-content-center'>
        
        <div className='col-4'><Sidebar/></div>


        <div className='col-8'>
          <div className='row'></div>
          <div className='row'></div>

        </div>

      </div>
    </div>
  );
}

export default App;
