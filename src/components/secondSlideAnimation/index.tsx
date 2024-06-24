import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import secondSlideImage from "../../assets/secondSlideImage.svg";
import leftImage from "../../assets/secondSlideImageLeft.svg";
import rightImage from "../../assets/secondSlideImageRight.svg"
import './style.scss';

function SecondSlideAnimation() {
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
                <img ref={imageRef} src={secondSlideImage} alt="mobile" className='main-image' />
            </CSSTransition>
            <img src={leftImage} alt="mobile" className={`left-image ${!loading && 'loaded'}`} />
            <img src={rightImage} alt="mobile" className={`right-image ${!loading && 'loaded'}`} />


        </div>
    );
}

export default SecondSlideAnimation;