import { Link } from 'react-router-dom'
import { useState } from 'react'


function M(props) {
    const [dog, setDog] = useState(["malamute", "malinois", "maltese", "mastiff", "mexicanhairless", "mix", "mountain"])
    return (
        <>
            <div className="dog-list">
                {dog.map((elDog, idx) => (
                    <Link to={`/ListOfAlpha/M/${elDog}`} key={idx}>
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

export default M