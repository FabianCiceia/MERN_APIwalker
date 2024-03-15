// App.jsx
import { useState } from 'react';
import Filter from './components/Filter';
import "./App.css"
import RenderData from './components/RenderData';


function App() {
  const {id , setId, filter, setFilter, buscar, datos } = Filter(); // Cambia aquí
  const [error, useError] = useState();
  const cambioId = (e) => {
    setId(e.target.value);
  };

  const BottonBuscar = () => {
    id? Bottons():useError("requiere id");
  };
  const Bottons = () =>{
    buscar();
    useError("");
  }
  return (
    <>
      <nav>
        <div className='nav-div'>
          <p>Search for: </p>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value='people'>People</option>
            <option value='planets'>Planets</option>
            <option value='films'>Films</option>
            <option value='species'>Species</option>
            <option value='vehicles'>Vehicles</option>
            <option value='starships'>Starships</option>
          </select>
        </div>
        <div className='nav-div'>
          <p>Id: </p>
          <input type='number' className='search' value={id} onChange={cambioId} />
          <button className='search-button' onClick={BottonBuscar}>Search</button>
          <div className='error-mensaje'>
          <p>{error}</p>
          </div>
        </div>
      </nav>
      <div>
        <RenderData datos = {datos} filter= {filter}/> 
      </div>
    </>
  );
}

export default App;
