import { Link } from 'react-router-dom'
import '../styles/DogList.css'

//Generates a list of links to each dog breed. 

function DogList(props) {
    return (
        <>
            <div className="dog-list">
                {props.dogArray.map((elDog, idx) => (
                    <Link to={`/ListOfDogs/${elDog}`} key={idx}>
                        <div className="dog-list-inner">
                            <ul>
                                <li>{elDog.charAt(0).toUpperCase() + elDog.slice(1)}</li>
                            </ul>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default DogList