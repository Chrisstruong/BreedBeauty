import './styles/App.css';
import ArtistList from './Components/ArtistList';
import Navbar from './Components/Navbar';
import ArtistOfDay from './Components/ArtistofDay';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <header>
       <Navbar />
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
