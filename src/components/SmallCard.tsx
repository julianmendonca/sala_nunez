import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SmallCardProps extends FlexProps {
  title: string;
  description: string;
  icon: ReactNode;
}
const SmallCard = ({ description, icon, title, ...props }: SmallCardProps) => {
  return (
    <Flex alignItems="start" direction="row" {...props}>
      {icon}
      <Flex alignItems="start" direction="column" pl="4">
        <Text fontSize="2xl">{title}</Text>
        <Text fontSize="lg" color="gray.600">
          {description}
        </Text>
      </Flex>
    </Flex>
  );
};

export default SmallCard;
