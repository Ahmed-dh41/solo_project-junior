
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Component/Register';
import Login from './Component/Login';
import MyData from './Component/MyData';
import Search from './Component/search';
import UpdatePost from './Component/UpdatePost';


const App=()=> {
  return (
<BrowserRouter>
        <Routes>

 
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/MyData" element= {<> <Search/><MyData/>   </>   } />
        <Route path="/Search" element={<Search/>} />
        <Route path="/update" element={<UpdatePost />} />
       
        </Routes>
      </BrowserRouter>



  );
}

export default App;
