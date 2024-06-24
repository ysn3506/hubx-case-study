import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import fourthSlideImage from "../../assets/fourthSlideImage.svg";
import leftImage from "../../assets/fourthSlideLeftImage.svg";
import rightImage from "../../assets/fourthSlideRightImage.svg"
import './style.scss';

function FourthSlideAnimation() {
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
                <img ref={imageRef} src={fourthSlideImage} alt="mobile" className='main-image' />
            </CSSTransition>
            <img src={leftImage} alt="mobile" className={`fourth-left-image ${!loading && 'loaded'}`} />
            <img src={rightImage} alt="mobile" className={`fourth-right-image ${!loading && 'loaded'}`} />


        </div>
    );
}

export default FourthSlideAnimation;