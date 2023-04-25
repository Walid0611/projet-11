import Register from './components/register/Register';
import Login from './components/Login/Login';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div >
    <Routes>
    <Route path ="/" element ={<Register/>}/>
    <Route path ="/Login" element ={<Login/>}/>
    </Routes>

    </div>
  );
}

export default App;
