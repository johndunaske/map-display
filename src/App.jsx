import { useEffect, useState } from 'react';
import './App.css';
import UploadImage from './components/uploadimage';
import MapList from './components/mapList';
import MapPage from './components/mapPage';

function App() {

  useEffect(() => {
    setCurrentPage(<MapList></MapList>);
  }, [])
  return (
    <>
      <MapList></MapList>
    </>
    
  )
}

export default App
