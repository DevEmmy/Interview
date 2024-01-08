
import './App.css'
import './index.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom"
import Main from './components/Main';
import UsersComponent from './components/UsersComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<Main />}/>
          <Route path='/users'  element={<UsersComponent />}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
