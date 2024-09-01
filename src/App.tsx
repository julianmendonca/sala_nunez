import {
  ChakraProvider,
  Box,
  theme,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import logoImage from "./assets/sala-nunez-logo.png";
import Section from "./components/Section";
import SmallCard from "./components/SmallCard";
import AcousticIcon from "./icons/AcousticIcon";
import BarIcon from "./icons/BarIcon";
import BandIcon from "./icons/BandIcon";
import RoomCard from "./components/RoomCard";
import rooms from "./constants/rooms";
import WhatsApp from "./icons/WhatsApp";
import Wave from "react-wavify";
import InstagramIcon from "./icons/InstagramIcon";
import GuitarAnimation from "./icons/GuitarAnimations";
import DrumAnimation from "./icons/DrumAnimation";

const smallCards = [
  {
    title: "Ensayos",
    description: "Equipamiento profesional",
    icon: <BandIcon boxSize="4em" />,
  },
  {
    title: "Alquiler de instrumentos",
    description: "Guitarra, bajo y platillos",
    icon: <AcousticIcon boxSize="4em" />,
  },
  {
    title: "Bar",
    description: "Para tomar birras y disfrutar",
    icon: <BarIcon boxSize="4em" />,
  },
];

export const App = () => (
  <ChakraProvider theme={theme}>
    <style>{`
      body{
      overflow-x: hidden;
      }
    `}</style>
    <Flex
      alignItems="center"
      direction="column"
      width="100%"
      backgroundImage="url(https://images.unsplash.com/photo-1710528184482-44188dcbff3f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      py="16"
    >
      <img src={logoImage} width="200" />
      <Flex
        direction="column"
        textAlign="center"
        maxW={["80%", "100%"]}
        mt="14"
      >
        <Text fontSize="lg" color="gray.200" mb="16" maxW="40em">
          El lugar perfecto para que los músicos den vida a su música. Sumergite
          en un oasis sonoro donde la pasión y la creatividad se fusionan en
          armonía.
        </Text>
      </Flex>
    </Flex>
    <Flex
      direction="column"
      width="100%"
      alignItems="center"
      mb="24"
      position="relative"
    >
      <Wave
        fill="white"
        paused={false}
        style={{ position: "absolute", left: 0, top: -100 }}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />
      <Flex
        justifyContent="space-around"
        alignItems={["start", "center"]}
        direction={["column", "row"]}
        w={["80%", "100%"]}
        zIndex={2}
      >
        {smallCards.map((card) => (
          <SmallCard {...card} mb={["8", "0"]} alignItems="center" />
        ))}
      </Flex>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        width="100%"
        mt="20"
      >
        <GuitarAnimation boxSize="13em" />
        <a
          href="https://api.whatsapp.com/send/?phone=5491161549962"
          target="_blank"
        >
          <Button
            fontSize={["2xl", "3xl"]}
            px={["7", "20"]}
            py={["7", "10"]}
            backgroundColor="red.600"
            textColor="white"
            _hover={{ backgroundColor: "red.700" }}
          >
            Reserva tu ensayo
          </Button>
        </a>
        <DrumAnimation boxSize="13em" />
      </Flex>
    </Flex>
    <Section background="#f3f3f3" pb="20">
      {rooms.map((room, index) => (
        <RoomCard
          {...room}
          direction={index % 2 === 0 ? "left" : "right"}
          margin="0px auto 100px auto"
          width={["100%", "80%"]}
        />
      ))}
    </Section>
    <Box position="relative">
      <Box position="absolute" top="-80px" width="100%">
        <Section
          background="rgba(50, 50, 50, 1)"
          textAlign="center"
          zIndex={2}
          pb="10"
        >
          <Text fontSize={["4xl", "6xl"]} textAlign="center" color="white">
            ¿Qué estás esperando?
            <a href="https://www.instagram.com/salasdenunez/" target="_blank">
              <InstagramIcon color="white" fontSize="80" />
            </a>
          </Text>
          <Text fontSize="lg" textAlign="center" my="8" color="white">
            Reservá tu sala de ensayo y empezá a disfrutar de la música como
            nunca antes.
          </Text>
          <Flex alignItems="center" justifyContent="space-around">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.332177234898!2d-58.4734904!3d-34.54514400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb69816fdac95%3A0x845e397880d4f13f!2sAv.%20Ruiz%20Huidobro%202561%2C%20C1429DNO%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1724988160757!5m2!1sen!2sar"
              width="80%"
              height="450"
              loading="lazy"
            ></iframe>
          </Flex>
        </Section>
      </Box>
    </Box>
    <WhatsApp />
  </ChakraProvider>
);
