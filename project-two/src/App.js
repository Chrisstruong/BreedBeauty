import './styles/App.css';
import DogList from './Components/DogList'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'

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
