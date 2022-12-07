import './styles/App.css';
import DogList from './Components/DogList'
import Navbar from './Components/Navbar'

import ArtistOfDay from './Components/RandomDog';
import { Routes, Route } from 'react-router-dom';
import RandomDog from './Components/RandomDog';



function App() {
  return (
  <>
    <header>
       <Navbar />
       <DogList />
    </header>
    <main>
    <Routes>
        <Route path="/" element={ <RandomDog /> } />
        <Route path="/dogs/:number" element={ <DogList /> } />
      </Routes>
    </main>
    <footer>
    </footer>
  </>
  );
}
export default App;
