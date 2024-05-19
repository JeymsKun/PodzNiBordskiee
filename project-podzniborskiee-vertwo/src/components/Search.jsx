import React, { useRef, useState, useEffect } from 'react';
import '../css/style.css';
import '../css/responsive.css';
import '../App.css';


function Search() {
  return (
      <form>
          <div className="form-search">
              <p>
                  You can discover more recipes and dishes.
              </p>

              <div className="search">
                  <span className="search-icon material-symbols-outlined">search</span>
                  <input className="search-input" type="search" placeholder="Search" />
              </div>

              <ul className="search-suggestions"></ul>
          </div>
      </form>
  );
}

export default Search;

// const SearchBar = () => {
//   const [suggestions, setSuggestions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const inputRef = useRef();

//   useEffect(() => {
//     if (searchTerm.length > 0) {
//       fetch('foods.json')
//         .then((response) => response.json())
//         .then((data) => {
//           const filteredSuggestions = data.filter((food) =>
//             food.name.toLowerCase().includes(searchTerm.toLowerCase())
//           );
//           setSuggestions(filteredSuggestions);
//         });
//     } else {
//       setSuggestions([]);
//     }
//   }, [searchTerm]);

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSuggestionClick = (e) => {
//     const foodId = e.target.dataset.foodId;
//   };

//   useEffect(() => {
//     const inputElement = inputRef.current;
//     const handleClickOutside = (e) => {
//       if (inputElement && !inputElement.contains(e.target)) {
//         setSuggestions([]);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <form>
//       <div className="form-search">
//         <p>
//           You can discover more recipes and dishes.
//         </p>

//         <div className="search">
//           <span className="search-icon material-symbols-outlined">search</span>
//           <input
//             ref={inputRef}
//             className="search-input"
//             type="search"
//             placeholder="Search"
//             value={searchTerm}
//             onChange={handleInputChange}
//           />
//         </div>

//         <ul className="search-suggestions">
//             {suggestions.map((suggestion) => (
//                 <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion.id)}>
//                     <button data-food-id={suggestion.id}>
//                         {suggestion.name}
//                     </button>
//                 </li>
//             ))}
//             {suggestions.length === 0 && <li>No results found</li>}
//         </ul>
//       </div>
//     </form>
//   );
// };

// export default SearchBar;