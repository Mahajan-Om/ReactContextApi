import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { AppContext } from './context/AppContext'

function App() {
  
  const {fetchdata} = useContext(AppContext);

  useEffect(()=>{
    fetchdata();
  },[])

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
