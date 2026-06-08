import './App.css';
import Navbar from "./components/Navbar.jsx"
import Board from './components/Board.jsx'
import { useState } from 'react';



const App = () => {
  const [filter, setFilter] = useState("All");

  return (
    <div className="App">
      <div id="header">
        <h1 className='headerText title'>RECIPE CORNER</h1>
        <h2 className='headerText'>Explore different fun & delicious recipes!</h2>    
      </div>
      <Navbar
        setFilter={setFilter}
      />

      <Board
        filter={filter}
      />
    </div>
  )
}

export default App;