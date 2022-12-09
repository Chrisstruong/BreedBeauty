import { Link } from 'react-router-dom'
import { useState } from 'react'


function F(props) {
    const [dog, setDog] = useState([ "finnish", "frise"])
    return (
        <>
            <div className="dog-list">
                {dog.map((elDog, idx) => (
                    <Link to={`/ListOfAlpha/F/${elDog}`} key={idx}>
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

export default F