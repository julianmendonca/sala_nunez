import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Box, Flex, FlexProps, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";

interface RoomCardProps extends Omit<FlexProps, "direction"> {
  title: string;
  size: string;
  equipment: { title: string; items: string[] }[];
  images: string[];
  direction: "left" | "right";
}
const RoomCard = ({
  equipment,
  images,
  size,
  title,
  direction,
  ...props
}: RoomCardProps) => {
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
      <Box width={["80%", "40%"]}>
        <Carousel infiniteLoop>
          {images.map((image) => (
            <div>
              <img src={image} />
            </div>
          ))}
        </Carousel>
      </Box>
      <Flex
        direction={"column"}
        alignItems={["center", direction === "left" ? "end" : "start"]}
        mb={[20, 0]}
        ml={[4, 0]}
      >
        <Text fontSize="6xl">{title}</Text>
        <Text fontSize="xl" pt="6" pb="4">
          {size}
        </Text>
        {equipment.map((item) => (
          <Flex
            direction="column"
            alignItems={["start", direction === "left" ? "end" : "start"]}
            alignSelf={["start", direction === "left" ? "end" : "start"]}
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
      </Flex>
    </Flex>
  );
};

export default RoomCard;
