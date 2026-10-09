import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard'
import {Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import BookForm from './pages/BookForm'
import BookDetails from './pages/BookDetails'
import NotFound from './pages/NotFound';
function App() {

  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/books" element={<Books/>}/>
        <Route path="/books/add" element={<BookForm/>}/>
        <Route path="/books/:id" element={<BookDetails/>}/>
        <Route path="/books/edit/:id" element={<BookForm />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
    </>
  )
}

export default App
