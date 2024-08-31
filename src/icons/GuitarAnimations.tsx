import Lottie from "lottie-react";
import animationData from "../assets/GuitarAnimation.json";
interface GuitarAnimationProps {
  boxSize?: string;
}
const GuitarAnimation = ({ boxSize }: GuitarAnimationProps) => {
  return (
    <div style={{ width: boxSize }}>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default GuitarAnimation;
