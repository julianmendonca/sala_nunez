import Lottie from "lottie-react";
import animationData from "../assets/DrumAnimation.json";
interface DrumAnimationProps {
  boxSize?: string;
}
const DrumAnimation = ({ boxSize }: DrumAnimationProps) => {
  return (
    <div style={{ width: boxSize }}>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default DrumAnimation;
