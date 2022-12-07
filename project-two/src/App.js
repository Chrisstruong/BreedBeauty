import './styles/App.css';
import DogList from './Components/DogList'
import Navbar from './Components/Navbar'
import RandomDog from './Components/RandomDog'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
  <>
    <header>
       <Navbar />
       <DogList />
    </header>
    <main>
      < RandomDog />
    </main>
    <footer>
    </footer>
  </>
  );
}
export default App;
