import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { GiDogHouse } from 'react-icons/gi';
import { TbClipboardList } from 'react-icons/tb';


function Navbar (props) {
    return (
        <>     
         <div aria-label="Main Navigation" className="full-nav">
            <div className="logo">
            <Link to = "./">{ <GiDogHouse/> }</Link>
            </div>
                <div className="breed-list">
                <Link to = "./ListOfDogs">Breed List { <TbClipboardList/> }</Link>
                </div>
        </div>
        </>
    )
}

export default Navbar