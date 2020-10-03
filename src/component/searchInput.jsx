import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

 
const SearchInput = () => {

    return(
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
           <div style={{ width: 300 }}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                 onKeyDown={(eve) => handleSubmit(eve)}
                 {...params} label="Search city"
                 margin="normal"
                 variant="outlined" 
             />
            )}
          /> 
          </div>
       </Grid>
     );
}


const handleSubmit = (eve) => {
  console.log(eve.value)
}

const top100Films = [
   {title : "Patna"}
  ];

export default SearchInput;
