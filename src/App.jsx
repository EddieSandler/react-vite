import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sayHello from './components/hello';
import Deck from './components/Pokedex';


function App() {


  return (
    <>

      <div className="pokedex">
      <h1>Pokedex</h1>
      <Deck />
    </div>
</>
  )
}

export default App
