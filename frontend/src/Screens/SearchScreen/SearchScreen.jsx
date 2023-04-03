import React, { useState } from "react";

import "./SearchScreen.css"
import axios from "axios";
import Product from "../../Components/Product/Product";
const itemsPerPage = 10;
export default function SearchScreen(){
    const [searchQuery,setSearchQuery]= useState('');
    const [searchResults,setSearchResults] = useState([]);

    const handleSearchQueryChange = (e) =>{
        setSearchQuery(e.target.value);
    }

    const handleSearchSubmit = async(e) =>{
        e.preventDefault();
        try{
            // const searchTerms = searchQuery.split(',').map((term) => term.trim());
            const response = await axios.get(`http://localhost:3001/api/products/search?q=${searchQuery}`);
      setSearchResults(response.data);
        }catch (error) {
            console.error(error);
          }
    }
console.log(searchResults)

// pagination code

const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(searchResults.length / itemsPerPage);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <li key={i} id={i} onClick={handleClick}>
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  const renderData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return searchResults.slice(start, end).map((product, index) => (
        <Product product={product} />
    //   <div key={index}>
    //     <p>{item.name}</p>
    //     <p>{item.description}</p>
    //   </div>
    ));
  };
    return(
        <div className="container">
        <div className="container form-group">
          <input type="text" value={searchQuery} onChange={handleSearchQueryChange} />
          <button className="btn btn-outline-dark" onClick={handleSearchSubmit}>Search</button>
        </div>
        <div id="wrap">
        <div id="columns" className="columns_4">

          {/* {searchResults.map((product) => (
              // <li key={product._id}>{product.ProductName}</li>
              <Product product={product} />
              ))} */}
              

              {renderData()}
              </div>
      <ul id="page-numbers">{renderPageNumbers()}</ul>
        </div>
      </div>
    );
}