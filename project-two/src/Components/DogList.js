import { useEffect, useState, useParams } from 'react'


function DogList (props) {
    const [dogs, setDogs] = useState(null)

    async function fetchDogList() {
        try {
            const response = await fetch(`https://dog.ceo/api/breeds/list/all`)
            const dogNewData = await response.json()
            console.log(dogNewData)
        } catch (err) {
            console.log(err)
        }
    }

    

    useEffect(() => {
        fetchDogList()
    }, [])



    return (
        <h1>Hello</h1>
        

    )

}

export default DogList