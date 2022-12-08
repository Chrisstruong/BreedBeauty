import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/DogList.css'

function DogList (props) {
    const [dog, setDog] = useState(null)
    const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    return (
        <>
        <div className="dog-list"> 
            {alpha.map((elDog, idx) => (
                <Link to = {`/ListOfAlpha/${elDog}`} key={idx}>
                    <div className="dog-list-inner">
                        <ul>
                        <li>{elDog}</li>
                        </ul>
                    </div>
                </Link>
            ))}
        </div>
        </>
    )
}

export default DogList