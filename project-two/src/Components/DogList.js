import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/DogList.css'

function DogList(props) {
    const [dog, setDog] = useState(null)
    const { Alpha } = useParams()
    const dogArray = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "buhund", "bulldog", "bullterrier", "cattledog", "chihuahua", "chow", "clumber", "cockapoo", "collie", "coonhound", "corgi", "cotondetulear", "dachshund", "dalmatian", "dane", "deerhound", "dhole", "dingo", "doberman", "elkhound", "entlebucher", "eskimo", "finnish", "frise", "germanshepherd", "greyhound", "groenendael", "havanese", "hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff", "mexicanhairless", "mix", "mountain", "newfoundland", "otterhound", "ovcharka", "papillon", "pekinese", "pembroke", "pinscher", "pitbull", "pointer", "pomeranian", "poodle", "pug", "puggle", "pyrenees", "redbone", "retriever", "ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "schnauzer", "segugio", "setter", "sharpei", "sheepdog", "shiba", "shihtzu", "spaniel", "springer", "stbernard", "terrier", "tervuren", "vizsla", "waterdog", "weimaraner", "whippet", "wolfhound"]
    return (
        <>
            <div className="dog-list">
                {dogArray.map((elDog, idx) => (
                    <Link to={`/ListOfAlpha/${Alpha}/${elDog}`} key={idx}>
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