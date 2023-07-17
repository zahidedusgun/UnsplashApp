import React from "react";
import "./Search.css";
import logo from "./logo.png";
import {useState} from 'react';


const Search = ({ search }) => {
    const [ValueInput, setValueInput] = useState('');
    const formSubmit = (event) => {
    event.preventDefault();
    search(ValueInput);
  };

const ValueChange = (event) => {
    setValueInput(event.target.value);
}

  return (
    <div>
      <form onSubmit={formSubmit} className="navbar">
        <img src={logo} alt="logo" className="logo"></img>
        <div className="search">
          <input value={ValueInput} onChange={ValueChange} placeholder="Write here..." className="input"></input>
          <button className="searchButton">Search</button>
        </div>
      </form>
      <p className="text">Enter a word and press the searh button</p>
      <hr className="line"></hr>
    </div>
  );
};

export default Search;
