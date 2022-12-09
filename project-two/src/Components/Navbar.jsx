import '../styles/navbar.css';
import { Link } from 'react-router-dom';


function Navbar (props) {
    return (
        <>     
         <div aria-label="Main Navigation" className="full-nav">
            <div className="logo">
            <Link to = "./">Random Pup</Link>
            </div>
            <div className = "search-context">
                <div className = "search-context">
                   {props.searchbar}
                </div>
                <div className="logo">
                <Link to = "./ListOfAlpha">Breed List</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar