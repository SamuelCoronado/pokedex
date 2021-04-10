import './App.css';
import SearchBar from "./components/SearchBar";
import Illustration from "./components/Illustration";
import Statistics from './components/Statistics';
import Pictures from './components/Pictures';
import Abillities from './components/Abillities';
import Loader from './components/pokeball.svg';
import {useState, useRef, useEffect} from 'react';

import {TweenMax} from 'gsap';

function App() {

  let pokeball = useRef(null);
  let alertRef = useRef(null);

  let alert =  <div ref={alertRef} className="alert">
                <p>Pokemon not found,  please check your typing</p>
              </div>

  const [pokemonInfo, setPokemonInfo] = useState(null);
  let pokeballComponent = <img ref={pokeball}  src={Loader} alt="loading" />;

  const [currentWrapperClass, setCurrentWrapperClass] = useState('');

  useEffect(() => {

    if(pokemonInfo === 'searching'){
      TweenMax.fromTo(
        pokeball.current,
        0.75,
        {opacity: 0},
        { opacity: 1, yoyo: true, repeat: -1 }
   
      )
    }

    if(pokemonInfo === 'not found'){
      TweenMax.to(
        alertRef.current,
        {top: '35%'}
      )

      setTimeout(() => {
        TweenMax.to(
          alertRef.current,
          {top: '-160%'}
        )  
      }, 2500);  
    }

    if(pokemonInfo !== null && pokemonInfo !== 'searching' && pokemonInfo !== 'not found') {
      setCurrentWrapperClass('wrapper-auto');
    }else {
      setCurrentWrapperClass('');
    }
 
  }, [pokemonInfo])


  return (
    <div className={`wrapper ${currentWrapperClass}`}>
        <nav>
          {alert}
        </nav>
        <div className="flex column main-wrapper">
          <SearchBar setPokemonInfo={setPokemonInfo} pokemonInfo={pokemonInfo} />
          {pokemonInfo == null ? 

            <h1 style={{marginBottom: '40rem'}}>Busca un pokemón</h1>
            :
            pokemonInfo === 'searching'?
            pokeballComponent
            :
            pokemonInfo !== 'not found' &&
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
