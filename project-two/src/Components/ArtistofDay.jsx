import '../styles/ArtistOfDay.css'

function ArtistOfDay (props) {
    return (
        <>
            <div className="day-container">
                <div>
                    <h1>ARTIST OF THE DAY</h1>
                </div>
                <div className="content">
                    <div className="artist-title">
                        <h3>The Gorrilaz</h3>
                    </div>
                    <div className="artist-info">
                        <h4>« Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. »</h4>
                    </div>
                </div>
                <div className="info-links">
                        <p>links....</p>
                </div>
            </div>
        </>
    )
}

export default ArtistOfDay