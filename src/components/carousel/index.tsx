import { ReactNode } from 'react';
import { ICarouselProps, Slide } from '../../models/module.interface';
import './style.scss'



function Carousel({ slides, activeSlideId, selectSlide }: ICarouselProps) {
    return (
        <div className='slider-wrapper'>
            {slides.map((s: Slide, index): ReactNode =>
                <div className={`slide-wrapper ${activeSlideId === s.id && 'active'}`}
                    onClick={() => selectSlide(s)}
                    key={s.title + index}>
                    <div className='icon-wrapper'>
                        <svg width="64" height="64" viewBox="0 0 64 64" className="circular-progress">
                            <circle className="bg"></circle>
                            <circle className="fg"></circle>
                        </svg>
                        <img src={s.icon} alt={s.title} />
                    </div>

                    <div className='slide-explanation'>
                        <span>{s.title}</span>
                    </div>

                </div>)}
        </div>
    );
}

export default Carousel;