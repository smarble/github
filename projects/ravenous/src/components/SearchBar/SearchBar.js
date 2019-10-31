import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
};



class SearchBar extends React.Component {
    // Creates a list of keys from the sortByOptions object. Uses those keys and their values to populate a list element with the current value and key. If any key names change in the Yelp API we are covered bc we don't specifically use the names of the keys.
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}> {sortByOption} </li>;
        });
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {/*Ask Mike. Demo uses this.renderSortByOptions()*/}
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses"/>
                    <input placeholder="Where?"/>
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com">Let's Go</a>
                </div>
            </div>
        )
    }
}


export default SearchBar;