import React from 'react';
import CustomNavbar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
 return(
  <div>
    <CustomNavbar />
    <ItemListContainer greeting={"Hola mundo!"} />
  </div>
 )
}

export default App;
