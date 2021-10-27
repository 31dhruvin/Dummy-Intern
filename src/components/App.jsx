import React, { useState } from 'react';
import "../Style/style.css"
import Navbar from './Navbar'
import UserStore from '.././Store'

const App = () => {
    const [userData, setUserData] = useState({
        auth: false,
      });
    return (

        <>
        <UserStore.Provider value={{ userData, setUserData }}>
            
        <Navbar />
        </UserStore.Provider> 
            </>
    )
}

export default App