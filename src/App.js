import './App.css';
import SearchBar from "./components/SearchBar";
import Illustration from "./components/Illustration";
import Statistics from './components/Statistics';
import Pictures from './components/Pictures';
import Abillities from './components/Abillities';

import {useState} from 'react';

function App() {

  const [pokemonInfo, setPokemonInfo] = useState(null)

  return (
    <div className="wrapper">
        <nav>
        </nav>
        <div className="flex column main-wrapper">
          <SearchBar setPokemonInfo={setPokemonInfo} pokemonInfo={pokemonInfo} />
          {pokemonInfo == null ? 

            <h1 style={{marginBottom: '40rem'}}>Busca un pokemón</h1>
            :

            <div className="grid">
              <Illustration imgUrl={pokemonInfo.imgUrl} pokemonName={pokemonInfo.name} pokemonType={pokemonInfo.pokemonType} />
              <Statistics statistics ={pokemonInfo.statisticsData}/>
              <Pictures pictures={pokemonInfo.pictures}/>
              <Abillities abilities={pokemonInfo.abilities} />
            </div>
          }    
        </div>
      </div>
  );
}

export default App;
