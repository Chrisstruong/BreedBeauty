import { Link } from 'react-router-dom'
import { useState } from 'react'


function P(props) {
    const [dog, setDog] = useState(["papillon", "pekinese", "pembroke", "pinscher", "pitbull", "pointer", "pomeranian", "poodle", "pug", "puggle", "pyrenees"])
    return (
        <>
            <div className="dog-list">
                {dog.map((elDog, idx) => (
                    <Link to={`/ListOfAlpha/P/${elDog}`} key={idx}>
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

export default P