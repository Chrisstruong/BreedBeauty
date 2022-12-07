import '../styles/Navbar.css'

function Navbar () {
    return (
        <>     
         <div className="full-nav">
            <div className="logo">
                <h1>Need a Boost? </h1>
            </div>
            <div className= "random">
                <button id="button-random">Show Me Another</button>
            </div>
            <div className = "search-context">
                <h4>Find a specific breed:</h4>
                <div className = "search">
                    <form action="#">
                        <input type="text"
                        placeholder="French Bulldog"
                        name= "search"/>
                        <button id="button-search">Enter</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar