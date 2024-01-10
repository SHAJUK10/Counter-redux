
import './App.css';
import Counter from './Components/Counter';

function App() {
  return (
    <div className='d-flex align-items-center justify-content-center w-100 flex-column'
    style={{height:"100vh"}}>
      <div className='d-flex align-items-center justify-content-center p-5 flex-column rounded '
      style={{backgroundColor:"white"}}>
<Counter/>
      </div>
    
    </div>
  );
}

export default App;
