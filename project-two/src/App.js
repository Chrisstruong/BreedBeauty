import './styles/App.css';
import { Routes, Route } from 'react-router-dom';

import BreedPhotos from './Components/BreedPhotos'
import Navbar from './Components/Navbar'
import RandomDog from './Components/RandomDog';
import DogList from './Components/DogList';
import ListOfAlpha from './Components/ListOfAlpha'

import A from './AlphaComponents/A'
import B from './AlphaComponents/B'
import C from './AlphaComponents/C'
import D from './AlphaComponents/D'
import E from './AlphaComponents/E'
import F from './AlphaComponents/F'
import G from './AlphaComponents/G'
import H from './AlphaComponents/H'
import K from './AlphaComponents/K'
import L from './AlphaComponents/L'
import M from './AlphaComponents/M'
import N from './AlphaComponents/N'
import O from './AlphaComponents/O'
import P from './AlphaComponents/P'
import R from './AlphaComponents/R'
import S from './AlphaComponents/S'
import T from './AlphaComponents/T'
import V from './AlphaComponents/V'
import W from './AlphaComponents/W'




function App() {
  
  return (
  <>
       <Navbar />
    <main>
      <Routes>
        <Route path="/" element={ <RandomDog  />  } />
        <Route path="/ListOfAlpha" element={ <ListOfAlpha /> }/>

        <Route path="/ListOfAlpha/A" element={ <A /> } />
        <Route path="/ListOfAlpha/B" element={ <B /> } />
        <Route path="/ListOfAlpha/C" element={ <C /> } />
        <Route path="/ListOfAlpha/D" element={ <D /> } />
        <Route path="/ListOfAlpha/E" element={ <E /> } />
        <Route path="/ListOfAlpha/F" element={ <F /> } />
        <Route path="/ListOfAlpha/G" element={ <G /> } />
        <Route path="/ListOfAlpha/H" element={ <H /> } />
        <Route path="/ListOfAlpha/K" element={ <K /> } />
        <Route path="/ListOfAlpha/L" element={ <L /> } />
        <Route path="/ListOfAlpha/M" element={ <M /> } />
        <Route path="/ListOfAlpha/N" element={ <N /> } />
        <Route path="/ListOfAlpha/O" element={ <O /> } />
        <Route path="/ListOfAlpha/P" element={ <P /> } />
        <Route path="/ListOfAlpha/R" element={ <R /> } />
        <Route path="/ListOfAlpha/S" element={ <S /> } />
        <Route path="/ListOfAlpha/T" element={ <T /> } />
        <Route path="/ListOfAlpha/V" element={ <V /> } />
        <Route path="/ListOfAlpha/W" element={ <W /> } />


        <Route path="/ListOfAlpha/:Alpha/:nameDog" element={ <BreedPhotos /> } />
      </Routes>
    </main>
    <footer>
    </footer>
  </>
  );
}
export default App;


