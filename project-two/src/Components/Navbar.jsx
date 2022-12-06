import '../styles/Navbar.css'

function Navbar () {
    return (
        <>     
         <div className="full-nav">
            <div className="logo">
                <h1>Artist Info App</h1>
            </div>
            <div className = "search-context">
                <h4>Search for any artist here:</h4>
                <div className = "search">
                    <form action="#">
                        <input type="text"
                        placeholder=" Sweet Sweet Music"
                        name= "search"/>
                        <button id="button-search">Enter</button>
                    </form>
                </div>
            </div>
            <div className= "link">
                <button id="button-random">Randomize Artist</button>
            </div>
        </div>
        </>
    )
}

export default Navbar