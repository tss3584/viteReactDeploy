import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import searchCourses from './Search';
import NavModal from './NavModal';


const Search = styled('div')(({ theme }) => ({ //Pulls from MUI's theme thing, makes CSS rules.
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05), //Makes slight transparency
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1), //change to slightly darker on hover
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '28ch',
      },
    },
  },
}));

export default function TopNav({ courses }) {
  const [query,setQuery] = React.useState(""); //empty query to start
  const [localResults, setLocalResults] = React.useState([]);  //empty array of results to start
  const [open, setOpen] = React.useState(false); //Hide dropdown

  function handleChange(e){
    const value  = e.target.value; //get search val
    setQuery(value); //save it

    const results = searchCourses(value, courses); //get array of shi
    setLocalResults(results); //save it
    console.log(results); 

    setOpen(results.length > 0 && value.trim() != ""); //if results is empty or search is empty dont open results box.
  }
return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar>

        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, fontWeight: 700 }}
        >
          Szalach's iSchool
        </Typography>

        <Box sx={{ position: "relative" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
              placeholder="Search for courses…"
              inputProps={{ 'aria-label': 'search' }}
              value={query}
              onChange={(e) =>{
                handleChange(e);
              }}
            />
          </Search>

          {!!localResults && ( //Turns out close friend is a REACT SOFTWARE ENGINEER. taught me to use this double!! to keep search open so modal remains open too
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                bgcolor: "white",
                boxShadow: 3,
                borderRadius: 1,
                zIndex: 10,
                maxHeight: 300,
                overflowY: "auto",
              }}
            >
            {localResults.map((course) => (
              <NavModal
                key={course.courseID}
                courseID={course.courseID}
                name={course.name}
                title={course.title}
                description={course.description}
              />
            ))
            }
            </Box>
            
          )}
        </Box>
        

      </Toolbar>
    </AppBar>
  );
}
