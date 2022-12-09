import '../styles/navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {
    return (
        <>     
         <div className="full-nav">
            <div className="logo">
            <Link to = "./">Random Pup</Link>
            </div>
            <div className = "search-context">
                <div className = "search">
                    <form action="#">
                        <input type="text"
                        placeholder="...search by breed"
                        name= "search"/>
                        <button id="button-search">Go Doge</button>
                    </form>
                </div>
                <div className="logo">
                <Link to = "./ListOfDogs">Breed List</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar