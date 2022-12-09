import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/Search.css'



function Search (props) {

 const { Alpha } = useParams()

    const dogArray = props.dogArray;
    const dogList = props.dogList;;
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s')

    const filterDogs = (dogArray, query) => {
        if (!query) {
      }
       return dogArray.filter((dog) => {
           const dogName = dog.toLowerCase();
           console.log("DOg NEM", dogName);
           return dogName.includes(query);
           })
   };
    const filtered = filterDogs(dogArray, query);
    return(
        <>
       {/* <h1> {props.dogArray}</h1> */}
        <div className="search-context">
        <form action='/' method="get">
            <label htmlFor="header-search">
            <span className="hide">Search Breed Here</span>
            </label>   
            <input
                type="text"
                id="search"
                placeholder="Search Breed Here"
                name="s"
                />
                <button type="submit">Go Doge</button>
        </form>
        </div>
        <ul>
            {filtered.map((dog, idx) => (
                <>
                <Link to={`/ListOfAlpha/${dog[0]}/${dog}`}></Link>
                </>
            ))}
        </ul>
        </>
    )

}

export default Search