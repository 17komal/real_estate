
import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './includes/Header.includes';
import Search from './component/search-component/Search.component';
import Card from './component/card-component/Card.component';




const App = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [searchString, setSearchString] = useState('');
  const onPropertyChange = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchString(searchString);

  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((property) => setPropertyData(property));

  }, []);

  const filterPropertyArray = propertyData.filter((property) => {
    return property.name.toLocaleLowerCase().includes(searchString);
  });

 
  return (
    <div className="App">
      <Header />
      <Search className='property_search' placeholder='Search Property' onChangeHandler={onPropertyChange} />
      <Card properties={filterPropertyArray} />
      
    </div>
  );
}

export default App;
