import { useState } from 'react'
import '../styles/Search.css'


const Search = (props) => {

    const [searchValue, setSearchValue] = useState('');

    const dogList = props.dogArray;
    const onChange = (event) => {
        setSearchValue(event.target.value)
        console.log('HI', setSearchValue);
        }

    const onSearch = (searchItem) => {
        setSearchValue(searchItem);
        console.log('search', searchItem)
    };

    return(
        <div className="search-context">
            <div className="search-context-inner">
                <input type="text" value={searchValue} onChange={onChange} 
                     id="search" placeholder="Search by breed.."/>
                <button onClick = {() => onSearch(searchValue)} id="search"> Go Doge
                </button>
            </div>
            <div className="drop-down-list">
                {dogList.filter((dog) => {
                    const searchItem = searchValue.toLowerCase();
                    console.log("SEARCH ITEM", searchItem)
                  return (searchItem)
                })
                .slice(0, 4)
                .map((dog, idx) => (
                <div onClick={() => onSearch(dog)} className="drop-down-row"
                key={idx}>{ dog }</div>))}
            </div>
        </div>
    );

};

export default Search