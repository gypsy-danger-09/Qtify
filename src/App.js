import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Section from './Components/Section'
import { useEffect, useState } from 'react';
import axios from 'axios';

const ENDPOINT = 'https://qtify-backend-labs.crio.do/'

function App() {

  const [topAlbum,setTopAlbum] = useState([])
  const [newAlbum,setNewAlbum] = useState([])

  useEffect(() =>{
    (async () => {
      let res =await axios.get(`${ENDPOINT}albums/top`)
    let res1 =await axios.get(`${ENDPOINT}albums/new`)
    setTopAlbum(res.data)
    setNewAlbum(res1.data)
  })()
  },[])
  return ( <>
  <Navbar />
  <Hero />
  <Section title='Top Album' data={topAlbum} />
  <Section title='New Album' data={newAlbum}/>
  </>
    
  );
}

export default App;
