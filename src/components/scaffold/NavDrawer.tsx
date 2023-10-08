import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AppBar, Drawer, List, ListItem, Toolbar, Typography} from "@mui/material";
import {Theme, useTheme} from "@mui/material/styles";
import ContactCard from "../contact-card";
import ContactDataGrid from "../contact-data-grid";
import ContactTable from "../contact-table";
import InputForm from "../form";

const drawerWidth: number = 240;
const themedStyles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});
const styles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none"
    }
  },
  drawerPaper: {
    backgroundColor: 'rgba(120, 120, 120, 0.2)',
    width: drawerWidth
  },
  main: {
    marginLeft: drawerWidth,
    padding: 3,
    maxWidth: 720
  }
};

const NavDrawer = () => {
  const theme: Theme = useTheme();
  const navComponents: Array<{text: string, route:string }> = [
    {text: 'Input InputForm', route: '/form'},
    {text: 'Contact Card Grid', route: '/grid'},
    {text: 'Contact Table', route: '/table'},
    {text: 'Contact Data Grid', route: '/data-grid'}
  ];
  return (
    <>
      <AppBar position='fixed' sx={themedStyles(theme)?.appBar}>
        <Toolbar>
          <Typography noWrap variant='h6'>
            Advanced Material UI Styling
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        disableEnforceFocus
        open
        PaperProps={{
          sx: styles.drawerPaper,
          elevation: 9
        }}
        sx={styles.drawer}
        variant='temporary'
      >
        <Toolbar />
        <List>
          {navComponents.map((nav: {text: string, route: string}, index: number) => (
            <ListItem key={nav.text}>
              <Link to={nav.route}>{nav.text}</Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main style={styles.main}>
        <Toolbar />
        <Routes>
          <Route path='/' element={<InputForm/>} />
          <Route path='/form' element={<InputForm/>} />
          <Route path='/grid' element={<ContactCard/>} />
          <Route path='/table' element={<ContactTable/>} />
          <Route path='/data-grid' element={<ContactDataGrid/>} />
        </Routes>
      </main>
    </>
  );
}

export default NavDrawer;
