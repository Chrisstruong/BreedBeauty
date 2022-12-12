import { useState,} from 'react'
import { Link } from 'react-router-dom'
import { FaDog } from "react-icons/fa";
import '../styles/Search.css'

//This allows the user to search from the list of breeds. 

const Search = (props) => {

    const [searchValue, setSearchValue] = useState('');
    


    let dogList = props.dogArray;

    const onChange = (event) => {
        setSearchValue(event.target.value)
    }

    const onSearch = (searchItem) => {
        setSearchValue(searchItem);
    }



    return (
        <div className="search-context">
            <div className="search-context-inner">
                <input type="text" value={searchValue} onChange={onChange}
                    id="search" placeholder={props.placeHolder} />
                <Link to={`/ListOfDogs/${searchValue}`}>
                    <button onClick={<Link to={`/ListOfDogs/${searchValue}`}></Link>}
                        id="search"> {<FaDog />}
                    </button>
                </Link>
            </div>

            {/* This filters through the search results to suggest breed name completion for the user dynamically as they type. */}
            
            <div className="drop-down-list">
                {dogList.filter((dog) => {
                    const searchItem = searchValue.toLowerCase();
                    const dogName = dog.toLowerCase();
                    return (searchItem && dogName.startsWith(searchItem) && dogName !== searchItem);
                })
                    .slice(0, 8)
                    .map((dog, idx) => (
                        <div onClick={() => onSearch(dog)} className="drop-down-row"
                            key={idx}>{dog}</div>))}
            </div>
        </div>
    );

};

export default Search
