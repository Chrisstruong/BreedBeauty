import { Link } from 'react-router-dom'
import { useState } from 'react'


function N(props) {
    const [dog, setDog] = useState(["newfoundland"])
    return (
        <>
            <div className="dog-list">
                {dog.map((elDog, idx) => (
                    <Link to={`/ListOfAlpha/N/${elDog}`} key={idx}>
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

export default N