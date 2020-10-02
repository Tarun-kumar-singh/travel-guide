import React from 'react';
import HeaderTitle from './component/header';
 import SearchInput from './component/searchInput';
import Loader from './component/loader';
 import Thumbnil from './component/cityThumbnil';
import CityDetail from './component/cityDetails';
import Place from './component/places';

function App() {
  let dataDisplay = false
  var names = ['Goal ghar', 'Ghandi Maidan', 'Mahavir temple'];

  return (
    <div>
    <div style={{marginTop:'20px'}}>
       <HeaderTitle/>
    </div>
      <SearchInput />
    <div style={{marginLeft:'23%', display:'none'}}>
      <Thumbnil/>
    </div>
      <CityDetail/>
    <div>
     
        {names.map(function(name, index){
        return <div>{
          <Place
          placeName={name}
        />}</div>;
        })}

     </div>
    </div>   
  );
}

export default App;
