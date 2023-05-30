import React from 'react';
import ReactDOM from 'react-dom/client';

//Cấu hình router
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import UseStateDemo from './pages/Hooks/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffectDemo';
import Detail from './pages/Detail';
import UseCallBackDemo from './pages/Hooks/UseCallBackDemo/UseCallBackDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
          <Route path="" element={<HomeTemplate />}>
              <Route index element={<Home />}></Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='register' element={<Register />}></Route>
              <Route path='contact' element={<Contact />}></Route>
              <Route path='use-state-demo' element={<UseStateDemo />}></Route>
              <Route path='use-effect-demo' element={<UseEffectDemo />}></Route>
              <Route path='use-callback-demo' element={<UseCallBackDemo />}></Route>
              <Route path='detail'>
                <Route path=':id' element={<Detail />}></Route>
              </Route>
          </Route>
      </Routes>
    </BrowserRouter>
);


