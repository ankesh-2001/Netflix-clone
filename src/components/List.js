import { useEffect, useRef, useState } from 'react';
import './List.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Listitem from './Listitem';
import { display } from '@mui/system';



export default function List({ type, section }) {

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const listref = useRef();

    const handelClick = (direction) => {
        setIsMoved(true);
        let distance = listref.current.getBoundingClientRect().x - 50
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listref.current.style.transform = `translateX(${230 + distance}px)`
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listref.current.style.transform = `translateX(${-230 + distance}px)`
        }
    };

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => setPopular(data.results))
    }, [])

    console.log(popular);

    return (
        <div className="list">
            <span className="listtitle">{section}</span>
            <div className="wrapper">
                <ArrowBackIosIcon className="sliderarrow lef"
                    onClick={() => handelClick("left")}
                    style={{ display: !isMoved && "none" }}></ArrowBackIosIcon>
                <div className="listcontainer" ref={listref}>
                    {/* <Listitem index={0}></Listitem>
                    <Listitem index={1}></Listitem>
                    <Listitem index={2}></Listitem>
                    <Listitem index={3}></Listitem>
                    <Listitem index={4}></Listitem>
                    <Listitem index={5}></Listitem>
                    <Listitem index={6}></Listitem>
                    <Listitem index={7}></Listitem>
                    <Listitem index={8}></Listitem> */}

                    {
                        popular.map((item, i) => (
                            <Listitem index={i} item={item}></Listitem>
                        ))
                    }
                </div>
                <ArrowForwardIosIcon className="sliderarrow righ" onClick={() => handelClick("right")}></ArrowForwardIosIcon>
            </div>
        </div >
    )
}
