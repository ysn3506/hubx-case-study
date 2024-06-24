
import { ReactNode } from 'react';
import Container from '../../components/container';
import { ModuleContext, useModuleContext } from '../../hooks/useModule';
import './style.scss';
import Carousel from '../../components/carousel';


function LandingPage() {

    const moduleListValue = useModuleContext();

    return (
        <ModuleContext.Provider value={moduleListValue}>
            <div className='wrapper'>
                <Container id={moduleListValue.activeModule.id} title={moduleListValue.activeModule.title} subtitle={moduleListValue.activeModule.subtitle} explanation={moduleListValue.activeModule.explanation} />
                <Carousel slides={moduleListValue.modules} activeSlideId={moduleListValue.activeModule.id} selectSlide={moduleListValue.selectModule} />
            </div>
        </ModuleContext.Provider>
    );
}

export default LandingPage;