import { useEffect, useState, useParams } from 'react'


function ArtistList (props) {
    const [artist, setArtist] = useState(null)

    async function fetchArtistList() {
        try {
            const response = await fetch(`https://musicbrainz.org/ws/artist/recordings`, {
                headers: {
                    Accept:"application/json"
                },
            })
            const ArtListData = await response.json()
            console.log(ArtListData)
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