import React, {useEffect, useRef} from 'react';
import {Checkbox, ListItemText, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {minWidth} from "./InputForm";

const roles: Array<string> = ['Software Dev', 'Architect', 'Designer', 'Business Analyst'];

const BeautifulSelect = (
  props: {
    value: string | undefined,
    onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void
  }
) => {
  const selectInputComponent: React.MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null);
  const [position, setPosition] = React.useState<number>(0);

  useEffect(() => {
    if (selectInputComponent.current) {
      setPosition(selectInputComponent.current.getBoundingClientRect().left + 20);
    }
  }, [selectInputComponent]);

  return (
    <Select
      {...props}
      ref={selectInputComponent}
      id='role-select'
      renderValue={(selected: string) => selected}
      MenuProps={{
        PaperProps: {
          sx: {
            left: `${position}px !important`,
            maxHeight: 180
          }
        }
      }}
      sx={{
        minWidth: minWidth,
        marginRight: 2
      }}
    >
      {
        roles.map((role: string) => (
          <MenuItem key={role} value={role}>
            <Checkbox checked={props.value === role}/>
            <ListItemText primary={role}/>
          </MenuItem>
        ))
      }
    </Select>
  );
};

export default BeautifulSelect;
