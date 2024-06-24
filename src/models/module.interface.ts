/** Every Module has title, subtitle, explanation, icon */
export interface IModule {
  id: number;
  title: string;
  subtitle: string;
  explanation: string;
  icon: any;
  isActive: boolean;
}

export interface ICarouselProps {
  slides: Slide[];
  activeSlideId: number;
  selectSlide: any;
}

export type ContainerProps = {
  title: string;
  subtitle: string;
  explanation: string;
  id: number;
};

export type Slide = {
  title: string;
  icon: string;
  id: number;
};
