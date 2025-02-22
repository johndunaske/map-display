import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import MapList from './components/mapList.jsx';
import UploadImage from './components/uploadimage.jsx';
import MapPage from './components/mapPage.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MapList />}></Route>
      <Route path='/addmap' element={<UploadImage />}></Route>
      <Route path='/viewmap/:map' element={<MapPage />}></Route>
    </Routes>
  </BrowserRouter>,
)
