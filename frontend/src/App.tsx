
import './App.css'
import './index.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"
import Main from './components/Main';
import UsersComponent from './components/UsersComponent';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Main />}/>
          <Route path='/users'  element={<UsersComponent />}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}


export default App
