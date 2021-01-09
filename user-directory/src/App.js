import React, { useState } from "react";
import {data} from './data'
import './App.css';
import Body from './components/Body'
import SortBy from './components/SortBy';





function App() {
 
 const [ inputValue, setInputValue ] = useState('');
 const [dataValue, setDataValue] = useState(data)
 const [sortValue, setSortValue] = useState('')

 const handleInputChange = e => {
   setDataValue(data)
   setInputValue(e.target.value)
 };
 
 const handleClick = e => {
  e.preventDefault();
  if(inputValue) {
    setDataValue(dataValue.filter(person => {
        return person.name.toLowerCase().includes(inputValue.toLowerCase().trim())
    }))
  setInputValue('');
  }
};


return (
  <>
    <Heading title="Employee Directory"/>
    <main>
      <SearchBar inputValue={inputValue} handleInputChange={handleInputChange} handleClick={handleClick} />
      <SortBy sortCategories={sortCategories} sortValue={sortValue} handleSortValueChange={handleSortValueChange}/>
      {dataValue.length !== 0 ? <Table data={dataValue}/> : <h2 style={{textAlign: 'center', color:"#e54"}}>No employee found with that name.</h2> }    
    </main>
  </>
);
}
  // return (
  //   <div className="App">
  //   <Body />
  // </div>
  // );


export default App;
