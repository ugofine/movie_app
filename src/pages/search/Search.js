import axios from "axios";
import React, {useState, useEffect} from "react";
import { Button, Tabs,  Tab, TextField,ThemeProvider} from "@material-ui/core"
import {createTheme} from "@material-ui/core/styles"
import SearchIcon from "@material-ui/icons/Search"
import SingleContent from "../../components/SingleContent/SingleContent";
import './Search.css'

const Search = () => {
    const [type, setType] = useState(0);
    const [searchText,setSearchText] = useState('');
    const [page,setPage] = useState(1);
    const [content, setContent] = useState([]);


    const darkTheme = createTheme ({
        palette:{
            type: 'dark',
            primary: {main: '#fff'},
        }
    })

    const fetchSearch = async () =>{
        try{
           const { data }=  await axios.get(
            `https://api.themoviedb.org/3/search/${type ? 'movie' : 'tv'}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
           setContent(data.results);
        }
        
        catch (error){console.error(error)}
    };


    useEffect(() => {
        fetchSearch();
        // eslint-disable-next-line
    },[type, page])
    return (
        <div>
            <ThemeProvider theme={darkTheme}>
            <div className="search">
            
            <TextField  
            style={{flex: 1}} 
             className="searchBox" 
             label="Search" 
              variant="filled"
              onChange={(e) => setSearchText(e.target.value)}
              />
    
            <Button   onClick={fetchSearch}  variant="contained" style={{marginLeft:10}}>
                <SearchIcon fontSize="large"/>
            </Button>
            </div>
            <Tabs value={type} indicatorColor="primary" textColor="primary" onChange={(e, newValue) =>
            {setType(newValue);
            setPage(1);
            }}>
                <Tab  label="Search Movies"  style={{width: "50%"}}/>
                <Tab  label="Search TV Series" style={{width: "50%"}} />
            </Tabs>
        </ThemeProvider>
        <div className="trending">
            {content.map(({title,
             id,
              poster_path,
               media_type,
                release_date,
                first_air_date,
                 vote_average, name })=>(
                <SingleContent key={id} 
                title={title || name}
                date={release_date || first_air_date}
                 media_type={type ? 'tv': 'movie'}
                  vote_average={vote_average}
                  poster={poster_path}
                  />

    
        
            )
            )}

        </div>
        </div>
    );
};

export default Search
