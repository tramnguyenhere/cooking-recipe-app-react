import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Search from "../components/Search";
import React from 'react'



const Home = () => {
  return (
    <div>
        <Search />
        <Veggie />
        <Popular />  
    </div>
  )
}

export default Home