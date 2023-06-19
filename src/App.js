import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })  
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
 
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#040c30';
      showAlert(" Dark mode has been enabled", "success ");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success ");
    }
  }
  
  return (
    <>
    <Router>
     <Navbar title="TextUtils" AboutUs="About" mode={mode} toggleMode={toggleMode}/> 
     <Alert alert={alert}/>
     <div className="container my-3">
      <Routes>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter text here to analyze" mode={mode}/>}></Route>
      </Routes>   
     </div>
    </Router>
    </>
  );
}

export default App;
