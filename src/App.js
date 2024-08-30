import React, { useState } from 'react';
import Meal from './components/Meal';
import Header from './components/Header';

function App() {
  // const [searchTerm, setSearchTerm] = useState('');
  // const handleInputChange = (e)=>{
  //   setSearchTerm(e.target.value)
  // }

  // const handleSearch = () => {
  //   console.log('Search term:', searchTerm);
  //   // Add your search logic here
  // };
  return (
    <div className="App">
      <Header />
     
      <Meal />
    </div>
  )
}

export default App;
