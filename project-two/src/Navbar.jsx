
function Navbar () {
    return (
        <>     
         <div className="full-nav">
            <div className="logo">
            </div>
            <div className = "search-context">
                <h4>Search for any artist here:</h4>
                <div className = "search">
                    <form action="#">
                        <input type="text"
                        placeholder=" Sweet Sweet Music"
                        name= "search"/>
                        <button class="button">Enter</button>
                    </form>
                </div>
            </div>
            <div className= "link">
                <h1>Click me for a Random Artist?</h1>
            </div>
        </div>
        </>
    )
}

export default Navbar