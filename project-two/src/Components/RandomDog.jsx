import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/RandomDog.css'




function RandomDog(props) {
    const [randomDogPic, setRandomDogPic] = useState(null)
    const [breedName, setBreedName] = useState(null)
    const dogArray = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "buhund", "bulldog", "bullterrier", "cattledog", "chihuahua", "chow", "clumber", "cockapoo", "collie", "coonhound", "corgi", "cotondetulear", "dachshund", "dalmatian", "dane", "deerhound", "dhole", "dingo", "doberman", "elkhound", "entlebucher", "eskimo", "finnish", "frise", "germanshepherd", "greyhound", "groenendael", "havanese", "hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "mastiff", "mexicanhairless", "mix", "mountain", "newfoundland", "otterhound", "ovcharka", "papillon", "pekinese", "pembroke", "pinscher", "pitbull", "pointer", "pomeranian", "poodle", "pug", "puggle", "pyrenees", "redbone", "retriever", "ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "schnauzer", "segugio", "setter", "sharpei", "sheepdog", "shiba", "shihtzu", "spaniel", "springer", "stbernard", "terrier", "tervuren", "vizsla", "waterdog", "weimaraner", "whippet", "wolfhound"]

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    // let storeName = dogArray[Math.floor(Math.random() * (dogArray.length - 0 + 1) + 0)]
    let storeName = dogArray[randomNumberInRange(0, dogArray.length - 1)]
    async function fetchRandomDogPic() {
        try {
            const response = await fetch(`https://dog.ceo/api/breed/${storeName}/images`)
            setBreedName(storeName)
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
                        <img src={randomDogPic[randomNumberInRange(0, randomDogPic.length - 1)]} alt="" />
                        <p>{breedName.charAt(0).toUpperCase() + breedName.slice(1)}</p>
                        <button onClick={fetchRandomDogPic} id="another">Another!</button>
                    </> : <p>Loading random Pic of Breed....</p>}
                </div>
            </div>
        </>
    )
}

export default RandomDog