import './SingleContent.css'
import {img_300, unavailable} from '../../config/config'
import { Badge } from '@material-ui/core'






const SingleContent = ({id, poster, title, media_type, date, vote, vote_average,name}) => {
    return (
        <div className="media">
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}/>
            <img  className="poster"
            src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
            <b className="title">{title}</b>
            <span  className="subtitle">{media_type === 'Movies' ? 'TV Series' : 'Movie'}
            <span>{date}</span>
            </span>

            
        </div>
    )
}

export default SingleContent
