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
                <h4>Search for a specific breed:</h4>
                <div className = "search">
                    <form action="#">
                        <input type="text"
                        placeholder="French Bulldog"
                        name= "search"/>
                        <button id="button-search">Go Doge</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar