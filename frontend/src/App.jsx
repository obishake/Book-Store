import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import DeleteBooks from './pages/DeleteBooks';
import ShowBooks from './pages/ShowBooks';
import EditBooks from './pages/EditBooks';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/details/:id' element={<ShowBooks/>}/>
      <Route path='/books/create' element={<CreateBooks/>}/>
      <Route path='/books/edit/:id' element={<EditBooks/>}/>
      <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
    </Routes>
  )
};

export default App
