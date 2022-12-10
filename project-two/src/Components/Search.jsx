import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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

        console.log('search', searchItem)
        }

    return(
        <div className="search-context">
            <div className="search-context-inner">
                <input type="text" value={searchValue} onChange={onChange} 
                     id="search" placeholder={props.placeHolder}/>
                <button onClick = {() => onSearch({dogList})} id="search"> {<FaDog />}
                </button>
            </div>
            <div className="drop-down-list">
                {dogList.filter((dog) => {
                    const searchItem = searchValue.toLowerCase();
                    const fullName = dog.toLowerCase();
                    console.log("SEARCH ITEM", searchItem)
                  return (searchItem && fullName.startsWith(searchItem) && fullName !== searchItem);
                })
                .slice(0, 8)
                .map((dog, idx) => (
                <div onClick={() => onSearch(dog)} className="drop-down-row"
                key={idx}>{ dog }</div>))}
            </div>
        </div>
    );

};

export default Search