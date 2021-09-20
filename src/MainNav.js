import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import { useHistory } from 'react-router-dom';



const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    backgroundColor: "#2d313a",
    bottom: 0,
    zIndex: 100,

  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  useEffect(() =>{
    if(value === 0){
        history.push('/')
    }
    else if(value === 1){
        history.push('/Movies')
    }
    else if(value === 2){
      history.push('/TV')
    }
    else if(value === 3){
      history.push('/Search')
  }
}, [value, history])


  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Trending" icon={<WhatshotIcon  />} 
      style={{color: "#fff"}} />
      <BottomNavigationAction label="Movies" icon={<MovieIcon />}style={{color: "#fff"}}  />
      <BottomNavigationAction label="TV" icon={<LiveTvOutlinedIcon />} style={{color: "#fff"}} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} style={{color: "#fff"}} />
      
    </BottomNavigation>
  );
}