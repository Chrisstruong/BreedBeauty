import './styles/App.css';
import { Routes, Route } from 'react-router-dom';

import DogDetails from './Components/DogDetails'
import Navbar from './Components/Navbar'
import ArtistOfDay from './Components/RandomDog';
import RandomDog from './Components/RandomDog';
import DogList from './Components/DogList';



function App() {
  return (
  <>
    <header>
       <Navbar />
       <DogList />
       {/* <DogDetails /> */}
    </header>
    <main>
    <Routes>
        <Route path="/" element={ <RandomDog /> } />
        <Route path="/dogs/:nameDog" element={ <DogDetails /> } />
      </Routes>
    </main>
    <footer>
    </footer>
  </>
  );
}
export default App;
