import './styles/App.css';
<<<<<<< HEAD
import DogList from './Components/DogList'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
=======
import ArtistList from './Components/ArtistList';
import Navbar from './Components/Navbar';
import ArtistOfDay from './Components/ArtistofDay';
import { Routes, Route } from 'react-router-dom';
>>>>>>> development

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
