import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import fifthSlideImage from "../../assets/fifthSlideImage.svg";
import leftImage from "../../assets/fifthSlideLeftImage.svg";
import middleImage from "../../assets/fifthSlideMiddleImage.svg"
import rightImage from "../../assets/fifthSlideRightImage.svg"
import './style.scss';

function FifthSlideAnimation() {
    const imageRef = useRef(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const timeToRender = setTimeout(() => {
            setLoading(false)
            clearTimeout(timeToRender);
        }, 900)
    }, [])

    return (
        <div className='second-slide-animation-wrapper'>
            <CSSTransition nodeRef={imageRef} appear in={loading} timeout={900} classNames="transition">
                <img ref={imageRef} src={fifthSlideImage} alt="mobile" className='main-image' />
            </CSSTransition>
            <img src={leftImage} alt="mobile" className={`fifth-left-image ${!loading && 'loaded'}`} />
            <img src={middleImage} alt="mobile" className={`fifth-middle-image ${!loading && 'loaded'}`} />
            <img src={rightImage} alt="mobile" className={`fifth-right-image ${!loading && 'loaded'}`} />


        </div>
    );
}

export default FifthSlideAnimation;