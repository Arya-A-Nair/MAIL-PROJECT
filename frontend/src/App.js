import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Inbox from './pages/Inbox'
import Sent from './pages/Sent';
import Compose from './pages/Compose';
import Archived from './pages/Archived';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/inbox' element={<Inbox/>}/>
          <Route path='/sent' element={<Sent/>}/>
          <Route path='compose/' element={<Compose/>}/>
          <Route path='archived/' element={<Archived/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
