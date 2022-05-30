import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Inbox from './pages/Inbox'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/inbox' element={<Inbox/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
