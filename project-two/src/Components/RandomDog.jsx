import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/RandomDog.css'


  

function RandomDog (props) {
    const [randomDogPic, setRandomDogPic] = useState(null)
    const dogArray = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "buhund", "bulldog", "bullterrier", "cattledog", "chihuahua", "chow", "clumber", "cockapoo", "collie", "coonhound", "corgi","cotondetulear", "dachshund", "dalmatian", "dane", "deerhound", "dhole", "dingo", "doberman", "elkhound", "entlebucher", "eskimo", "finnish", "frise", "germanshepherd", "golden", "greyhound", "groenendael", "havanese", "hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff", "mexicanhairless", "mix", "mountain", "newfoundland", "otterhound", "ovcharka", "papillon", "pekinese", "pembroke", "pinscher", "pitbull", "pointer", "pomeranian", "poodle", "pug", "puggle", "pyrenees", "redbone", "retriever", "ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "schnauzer", "segugio", "setter", "sharpei", "sheepdog", "shiba", "shihtzu", "spaniel", "springer", "stbernard", "terrier", "tervuren", "vizsla", "waterdog", "weimaraner","whippet", "wolfhound"]
    
    function randomNumberInRange (min, max) {
        return Math.floor(Math.random() * (max-min +1)) + min
    }
    // let randomNumer = Math.floor(Math.random() * dogAr)

    async function fetchRandomDogPic() {
        try {
            const response = await fetch (`https://dog.ceo/api/breed/${dogArray[randomNumberInRange(0,dogArray.length-1)]}/images`)
            const randomDogPicNewData = await response.json()
            setRandomDogPic(randomDogPicNewData.message)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchRandomDogPic()
    }, [])

    return (
        <>
            <div className="dog-container">
                <div className="photo-box">
                    {randomDogPic ? <>
                    <img src={ randomDogPic[randomNumberInRange(0,randomDogPic.length-1)] } alt="" />
                    <button id="another">Another!</button>
                    </> : <p>Loading random Pic of Breed....</p>}
                </div>
            </div>
        </>
    )
}

export default RandomDog