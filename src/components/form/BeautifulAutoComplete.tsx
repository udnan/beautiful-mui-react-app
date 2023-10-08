import React from 'react';
import {Autocomplete, TextField} from '@mui/material';
import {minWidth} from './InputForm';

const skills: Array<string> = ['React', 'Angular', 'Python', 'NodeJs', 'Machine Learning'];

const BeautifulAutoComplete = (
  props: {
    value: Array<string>,
    onChange: (event: React.SyntheticEvent<Element, Event>, value: Array<string>) => void
  }) => {
  return (
    <Autocomplete
      {...props}
      multiple
      options={skills}
      renderInput={
        (params) =>
          <TextField
            {...params}
            name='skills'
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused': {
                color: 'primary.dark',
              }
            }}
          />
      }
      getOptionLabel={(option: string) => option}
      renderOption={(props, option: string) => (
        <li {...props}>{option}</li>
      )}
      ListboxProps={{
        sx: {
          height: 100,
          color: 'yellow',
          '& li:nth-child(even)': {backgroundColor: 'hotpink'}
        }
      }}
      sx={{
        minWidth: minWidth
      }}
    />
  );
};

export default BeautifulAutoComplete;
