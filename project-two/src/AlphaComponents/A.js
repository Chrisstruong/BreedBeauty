import { Link } from 'react-router-dom'
import { useState } from 'react'


function A(props) {
    const [dog, setDog] = useState(["affenpinscher", "african", "airedale", "akita", "appenzeller", "australian"])
    return (
        <>
            <div className="dog-list">
                {dog.map((elDog, idx) => (
                    <Link to={`/ListOfAlpha/A/${elDog}`} key={idx}>
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

export default A