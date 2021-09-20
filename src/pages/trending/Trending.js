import axios from "axios";
import React, {useState, useEffect} from "react";
// import CustomPagination from "../../components/pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Trending.css';


const Trending = () => {

    const [content, setContent] = useState ([]);
    const [page,setPage] = useState(1);

    const fetchTending =  async () => {
        const {data} = await axios.get(

            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );

        // console.log(data)   
        setContent(data.results);
    };
    useEffect(() => {
        window.scroll(0,0)
        fetchTending();
    }, []);




    return (
        <div>
        <span className="pagetitle">trending</span>
        <div className="trending">
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
        {/* <CustomPagination setPage={setPage}/> */}
        </div>
    )
}

export default Trending
