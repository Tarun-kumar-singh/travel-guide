import React from 'react';
import HeaderTitle from './component/header';
 import SearchInput from './component/searchInput';
import Loader from './component/loader';
 import Thumbnil from './component/cityThumbnil';
import CityDetail from './component/cityDetails';
import Place from './component/places';

function App() {
  let dataDisplay = false
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
         <div>
           <Place/>
          </div>
          <div>
           <Place/>
          </div>
          <div>
           <Place/>
          </div>
          <div>
           <Place/>
          </div>
     </div>
    </div>   
  );
}

export default App;
