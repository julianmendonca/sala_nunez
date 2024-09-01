import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Box, Flex, FlexProps, Text, useMediaQuery } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface RoomCardProps extends Omit<FlexProps, "direction"> {
  title: string;
  size: string;
  equipment: { title: string; items: string[] }[];
  images: string[];
  direction: "left" | "right";
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const RoomCard = ({
  equipment,
  images,
  size,
  title,
  direction,
  ...props
}: RoomCardProps) => {
  const id = title.replace(/ /g, "-").replace(/"/g, "").toLowerCase();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const descriptionRed = useRef(null);
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: descriptionRed });
  const scale = useTransform(scrollYProgress, [1, 0], [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useParallax(scrollYProgress, 150);
  const offset = 0;
  const descriptionY = useTransform(y, (value) => (value > offset ? value : 0));
  const carouselX = useTransform(y, (value) =>
    value > offset ? (direction === "left" ? -value : value) : 0
  );
  const boxShadow = `${
    direction === "left" ? "-20px" : "20px"
  } 20px 20px rgba(0, 0, 0, 0.4);`;
  const position = direction === "left" ? "end" : "start";
  return (
    <Flex
      justifyContent="space-around"
      alignItems={["center", "start"]}
      direction={[
        "column-reverse",
        direction === "left" ? "row" : "row-reverse",
      ]}
      {...props}
    >
      <style>{`
      #${id} .carousel.carousel-slider {
        box-shadow: ${boxShadow}
      }
      `}</style>
      <Box width={["80%", "40%"]}>
        <motion.div
          id={id}
          style={isLargerThan800 ? { x: carouselX, scale, opacity } : {}}
        >
          <Carousel infiniteLoop ref={carouselRef} thumbWidth={50}>
            {images.map((image) => (
              <div>
                <img src={image} />
              </div>
            ))}
          </Carousel>
        </motion.div>
      </Box>

      <div ref={descriptionRed}></div>
      <Flex
        direction={"column"}
        alignItems={["center", position]}
        mb={[20, 0]}
        ml={[4, 0]}
      >
        <motion.div
          style={isLargerThan800 ? { y: descriptionY, scale, opacity } : {}}
        >
          <Text fontSize="6xl" textAlign={["center", position]}>
            {title}
          </Text>
          <Text fontSize="xl" pt="6" pb="4">
            {size}
          </Text>
          {equipment.map((item) => (
            <Flex
              direction="column"
              alignItems={["start", position]}
              alignSelf={["start", position]}
              mt="4"
            >
              <Text fontSize="lg">
                <b>{item.title}</b>
              </Text>
              {item.items.map((item) => (
                <Text>{item}</Text>
              ))}
            </Flex>
          ))}
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default RoomCard;
