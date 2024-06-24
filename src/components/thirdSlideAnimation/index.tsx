import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import thirdSlideImage from "../../assets/thirdSlideImage.svg"
import insideImage from "../../assets/thirdInsideImage.svg"


import './style.scss';

function ThirdSlideAnimation() {
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
                <img ref={imageRef} src={thirdSlideImage} alt="mobile" className='main-image' />
            </CSSTransition>
            <img  src={insideImage} alt="mobile" className={`inside-first ${!loading && 'loaded'}`} />
            <img  src={insideImage} alt="mobile" className={`inside-second ${!loading && 'loaded'}`} />
            <img  src={insideImage} alt="mobile" className={`inside-third ${!loading && 'loaded'}`} />


        </div>
    );
}

export default ThirdSlideAnimation;