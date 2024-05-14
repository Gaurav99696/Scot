import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import SingUp from './pages/SingUp'
import Chat from './pages/Chat';
import VerifyUser from './pages/VerifyUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Chat />} />
          <Route path='/login' element={<Login />} />
          <Route path='/singUp' element={<SingUp />} />
          <Route path='/verifyUser' element={<VerifyUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;