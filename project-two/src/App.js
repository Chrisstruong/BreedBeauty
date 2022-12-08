import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import BreedPhotos from './Components/BreedPhotos'
import Navbar from './Components/Navbar'
import RandomDog from './Components/RandomDog';
import DogList from './Components/DogList';
import ListOfAlpha from './Components/ListOfAlpha'



function App() {
  
  return (
  <>
       <Navbar />
    <main>
      <Routes>
        <Route path="/" element={ <RandomDog  />  } />
        <Route path="/ListOfAlpha" element={ <ListOfAlpha /> }/>
        <Route path="/ListOfAlpha/:Alpha" element={<DogList />} />
        <Route path="/ListOfAlpha/:Alpha/:dogList/:nameDog" element={ <BreedPhotos /> } />
      </Routes>
    </main>
    <footer>
    </footer>
  </>
  );
}
export default App;


