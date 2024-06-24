import { useState, useRef, useEffect } from "react";
import { ContainerProps } from "../../models/module.interface";
import { CSSTransition } from "react-transition-group";
import "./style.scss";
import FirstSlideAnimation from "../firstSlideAnimation";
import SecondSlideAnimation from "../secondSlideAnimation";
import ThirdSlideAnimation from "../thirdSlideAnimation";
import FourthSlideAnimation from "../fourthSlideAnimation";
import FifthSlideAnimation from "../fifthSlideAnimation";

function Container({ title, subtitle, explanation, id }: ContainerProps) {
  const nodeRef = useRef(null);
  const [changeTitle, setChangeTitle] = useState<boolean>(true);

  useEffect(() => {
    setChangeTitle(false);
    const timeToRender = setTimeout(() => {
      setChangeTitle(true);
      clearTimeout(timeToRender);
    }, 300);
  }, [title]);

  return (
    <div className="container-wrapper">
      <CSSTransition
        nodeRef={nodeRef}
        in={changeTitle}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div ref={nodeRef} className="container-right-side">
          <h2 className="title">{title}</h2>
          <h1 className="subtitle">{subtitle}</h1>
          <p className="explanation">{explanation}</p>
          <button className="button-primary">Learn More</button>
        </div>
      </CSSTransition>
      <div className="container-left-side">
        {id === 0 && <FirstSlideAnimation />}
        {id === 1 && <SecondSlideAnimation />}
        {id === 2 && <ThirdSlideAnimation />}
        {id === 3 && <FourthSlideAnimation />}
        {id === 4 && <FifthSlideAnimation />}
      </div>
    </div>
  );
}

export default Container;
