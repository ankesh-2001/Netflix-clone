import './Listitem.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Listitem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <Link to='/Watch'>
            <div
                className="listitem"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    className="listimg"
                    // src="https://wallpapercave.com/wp/wp1917154.jpg"
                    src={` https://image.tmdb.org/t/p/original${item && item.backdrop_path}`}
                    alt=""
                />
                {isHovered && (
                    <>
                        <video src={trailer} autoPlay={true} loop />
                        <div className="iteminfo">
                            <div className="icons">
                                <PlayArrowIcon className="ico"></PlayArrowIcon>
                                <AddIcon className="ico"></AddIcon>
                                <ThumbUpOffAltIcon className="ico"></ThumbUpOffAltIcon>
                                <ThumbDownOffAltIcon className="ico"></ThumbDownOffAltIcon>
                            </div>
                            <div className="itemInfoTop">
                                <span>1 hour 14 mins</span>
                                <span className="limit">+16</span>
                                <span>1999</span>
                            </div>
                            <div className="description">
                                {item.overview}
                            </div>
                            <div className="genere">Action</div>
                        </div>
                    </>
                )}

            </div>
        </Link>

    )
}
