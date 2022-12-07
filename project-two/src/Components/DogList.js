import { useEffect, useState, useParams } from 'react'
import '../styles/RandomDog.css'

function DogList (props) {
    const [dogs, setDogs] = useState(null)

    const dogArray = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "buhund", "bulldog", "bullterrier", "cattledog", "chihuahua", "chow", "clumber", "cockapoo", "collie", "coonhound", "corgi","cotondetulear", "dachshund", "dalmatian", "dane", "deerhound", "dhole", "dingo", "doberman", "elkhound", "entlebucher", "eskimo", "finnish", "frise", "germanshepherd", "golden", "greyhound", "groenendael", "havanese", "hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff", "mexicanhairless", "mix", "mountain", "newfoundland", "otterhound", "ovcharka", "papillon", "pekinese", "pembroke", "pinscher", "pitbull", "pointer", "pomeranian", "poodle", "pug", "puggle", "pyrenees", "redbone", "retriever", "ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "schnauzer", "segugio", "setter", "sharpei", "sheepdog", "shiba", "shihtzu", "spaniel", "springer", "stbernard", "terrier", "tervuren", "vizsla", "waterdog", "weimaraner","whippet", "wolfhound"]
    let randomNum = Math.floor(Math.random() * dogArray.length +1)
    console.log(randomNum)


    async function fetchDogList() {
        try {
            const response = await fetch(`https://dog.ceo/api/breed/${dogArray[randomNum]}/images`)
            const dogNewData = await response.json()
            console.log(dogNewData)
            setDogs(dogNewData.message)
        } catch (err) {
            console.log(err)
        }
    }

    

    useEffect(() => {
        fetchDogList()
    }, [])



    return (
        <div>
            {dogs ? <>
                <img className='photo-box' src={dogs[randomNum]} alt=""/>
            </> : <p>Loading dog...</p>  }
        </div>
    )

}

export default DogList