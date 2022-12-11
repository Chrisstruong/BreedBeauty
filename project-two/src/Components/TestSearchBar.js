import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaDog } from "react-icons/fa";
import '../styles/Search.css'


const Search = (props) => {

    const [searchValue, setSearchValue] = useState('');

    let dogList = props.dogArray;

    const onChange = (event) => {
        setSearchValue(event.target.value)
    }

    const onSearch = (searchItem) => {
        setSearchValue(searchItem);

        // console.log("searchValue:",searchValue)
        // console.log("setSearchValue:",setSearchValue)
    }



    return (
        <div className="search-context">
            <div className="search-context-inner">
                <input type="text" value={searchValue} onChange={onChange}
                    id="search" placeholder={props.placeHolder} />
                <Link to={`/ListOfDogs/${searchValue}`}>
                    {/* <button onClick = {() => {setSearchValue(searchValue)}} id="search"> {<FaDog />}
                </button> */}
                    <button onClick={<Link to={`/ListOfDogs/${searchValue}`}></Link>}
                        id="search"> {<FaDog />}
                    </button>
                </Link>
            </div>
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
