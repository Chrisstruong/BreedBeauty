import { Link } from 'react-router-dom'
import { useState } from 'react'


function D(props) {
    const [dog, setDog] = useState(["dachshund", "dalmatian", "dane", "deerhound", "dhole", "dingo", "doberman"])
    return (
        <>
            <div className="dog-list">
                {dog.map((elDog, idx) => (
                    <Link to={`/ListOfAlpha/D/${elDog}`} key={idx}>
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

export default D