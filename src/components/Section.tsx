import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import Wave from "react-wavify";

interface SectionProps extends BoxProps {
  background: string;
  children: ReactNode;
}
const Section = ({ background, children, ...props }: SectionProps) => {
  return (
    <Box>
      <Wave
        fill={background}
        paused={false}
        style={{ display: "flex" }}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />
      <Box backgroundColor={background} {...props}>
        {children}
      </Box>
    </Box>
  );
};
export default Section;
