import { Link } from 'react-router-dom'
import { useState } from 'react'


function S(props) {
    const [dog, setDog] = useState(["saluki", "samoyed", "schipperke", "schnauzer", "segugio", "setter", "sharpei", "sheepdog", "shiba", "shihtzu", "spaniel", "springer", "stbernard"])
    return (
        <>
            <div className="dog-list">
                {dog.map((elDog, idx) => (
                    <Link to={`/ListOfAlpha/S/${elDog}`} key={idx}>
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

export default S