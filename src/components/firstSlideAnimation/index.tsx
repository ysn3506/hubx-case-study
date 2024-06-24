import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import firstSlideImage from "../../assets/firstSlideImage.svg";
import "./style.scss";

function FirstSlideAnimation() {
  const imageRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const timeToRender = setTimeout(() => {
      setLoading(false);
      clearTimeout(timeToRender);
    }, 900);
  }, []);

  return (
    <CSSTransition
      nodeRef={imageRef}
      appear
      in={loading}
      timeout={900}
      classNames="transition"
    >
      <img ref={imageRef} src={firstSlideImage} alt="mobile" />
    </CSSTransition>
  );
}

export default FirstSlideAnimation;
