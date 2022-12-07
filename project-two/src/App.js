import './styles/App.css';
import DogList from './Components/DogList'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
<<<<<<< Updated upstream
=======
=======
import ArtistList from './Components/ArtistList';
import Navbar from './Components/Navbar';
import ArtistOfDay from './Components/RandomDog';
import TestComponent from './Components/TestComponent'
import { Routes, Route } from 'react-router-dom';
>>>>>>> development
>>>>>>> Stashed changes


function App() {
  return (
  <>
    <header>
       <Navbar />
       <DogList />
    </header>
    <main>
      <ArtistOfDay />
    </main>
    <footer>
    </footer>
  </>
  );
}
export default App;
