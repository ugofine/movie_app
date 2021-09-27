import axios from "axios";
import React, {useState, useEffect} from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Tv.css';




const Tv = () => {

    const [content, setContent] = useState ([])
    const fetchTv =  async () => {
        const {data} = await axios.get(

            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&lang=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
        );

        // console.log(data)   
        setContent(data.results);
    };
    useEffect(() => {
        window.scroll(0,0)
        fetchTv();
    }, []);


    return (

        <div>
        <span className="pagetitle">TV</span>
        <div className="tv">
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

export default Tv
