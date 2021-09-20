import axios from "axios";
import React, {useState, useEffect} from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Movies.css';




const Movies = () => {

    const [content, setContent] = useState ([])
    const fetchMovies =  async () => {
        const {data} = await axios.get(

            `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&lang=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
        );

        // console.log(data)   
        setContent(data.results);
    };
    useEffect(() => {
        window.scroll(0,0)
        fetchMovies();
    }, []);




    return (
        <div>
        <span className="pagetitle">Movies</span>
        <div className="movies">
            {content.map(({title,
             id,
              poster_path,
               media_type,
                release_date,
                first_air_date,
                 vote_average })=>(
                <SingleContent key={id} 
                title={title}
                date={release_date || first_air_date}
                 media_type={media_type}
                  vote_average={vote_average}
                  poster={poster_path}
                  />

    
        
            )
            )}

        </div>
        </div>
    )
}

export default Movies
