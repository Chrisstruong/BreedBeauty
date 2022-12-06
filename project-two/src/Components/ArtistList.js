import { useEffect, useState, useParams } from 'react'


function ArtistList (props) {
    const [artist, setArtist] = useState(null)

    async function fetchArtistList() {
        try {
            const response = await fetch(`http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?inc=aliases`)
            const ArtListData = await response.json()
            console.log(ArtListData)


            setArtist(ArtListData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchArtistList()
    }, [])



    return (
        <h1>Hello</h1>

    )

}

export default ArtistList