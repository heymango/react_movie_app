import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title,year,summary,poster,genres,rating}){
    const [isHover, setIsHover] = useState(false);

    const handleMouseOver=()=>{

        if(!isHover) setIsHover(true);
        console.log(isHover);
    }
    const handleMouseOut=()=>{
        if(isHover) setIsHover(false);
        console.log(isHover);
    }
    return (
        <div className = "moviecard"  onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>
            <div className="movie">
                <img src={poster} alt={title} title={title}  />
                <div className="movie__head">
                 <h3 className="movie__title">{title}</h3>
                 <h4 className ="movie__rating">| {rating}</h4></div>
            </div> 
            <div className = "movie__data">
                
             {isHover&&(
                <div className="hover__data">
                    <h3 className="movie__intitle">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className = "movie__genres">
                        {genres.map((genre,index)=>{
                            return <li key={index} className = "movie__genre">{genre}</li>;
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0,180)}...</p>
                </div>
             )}
            </div>
        </div>
    );

    
}


Movie.propTypes = {
    year:PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;