import * as React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  Divider,
  Button,
} from "@chakra-ui/react";
import { useProperty } from "../../hooks/data/property";
import NoImage from "../../assets/images/no-image.png";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiFillStar,
  AiTwotoneMail,
} from "react-icons/ai";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
} from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom";

interface PropertyDetailsProps {
  propertyId: string;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  propertyId,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: property } = useProperty(params.id || "");
  console.log({ property });

  return (
    <Flex direction="column" h="100%" p="50px" bg="gray.100">
      <Flex justifyContent="space-between" mb="15px">
        <Button onClick={() => navigate(-1)} bg="gray.300">
          <AiOutlineArrowLeft />
        </Button>
        <Link _focus={{ outline: "none" }} href="/">
          Back to Property Listing
        </Link>
      </Flex>
      <Divider h="1px" bg="#E5E5E5" mb="15px" />
      <Flex
        justifyContent="space-between"
        height="50px"
        p="15px"
        bg="#fff"
        mb="15px"
      >
        <Flex>
          <Flex alignItems="center" mr="30px">
            <AiFillStar />
            <Link _focus={{ outline: "none" }} ml="5px">
              Save to Favourites
            </Link>
          </Flex>
          <Flex alignItems="center">
            <AiTwotoneMail />
            <Link _focus={{ outline: "none" }} ml="5px">
              Send to Email
            </Link>
          </Flex>
        </Flex>
        <Flex w="200px" justifyContent="space-between" alignItems="center">
          <Text>Share this:</Text>
          <TiSocialFacebook />
          <TiSocialInstagram />
          <TiSocialTwitter />
          <TiSocialLinkedin />
          <TiSocialYoutube />
        </Flex>
      </Flex>
      <Box
        w="100%"
        h="600px"
        bgImg={property?.images?.[0]?.path || NoImage}
        bgSize="cover"
        bgPosition={["center", "center"]}
        border="10px solid #fff"
        mb="15px"
      ></Box>
      <Flex
        h="110px"
        w="100%"
        bg="#fff"
        flexDirection="column"
        px="10px"
        mb="15px"
        justifyContent="center"
      >
        <Text mb="5px" fontWeight="700">
          More Photos of the Property
        </Text>
        <Flex>
          {property?.images?.map((image, index) => (
            <Image
              src={image.path}
              alt={image.originalname}
              h="60px"
              w="60px"
              mr="10px"
              key={index}
            />
          ))}
        </Flex>
      </Flex>
      <Flex w="100%" h="300px" bg="#fff" flexDirection="column" p="10px">
        <Text fontWeight="700" mb="10px">
          Home Information
        </Text>
        <Flex
          justifyContent="space-between"
          h="40px"
          borderBottom="1px"
          borderBottomColor="#E5E5E5"
        >
          <Flex alignItems="center" w="50%">
            <AiOutlineArrowRight />
            <Text ml="10px">Property Type: &nbsp;{property?.type}</Text>
          </Flex>
          <Flex alignItems="center" w="50%">
            <AiOutlineArrowRight />
            <Text ml="10px">
              Property Owner: &nbsp;{property?.propertyOwner}
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          h="40px"
          borderBottom="1px"
          borderBottomColor="#E5E5E5"
        >
          <Flex alignItems="center" w="50%">
            <AiOutlineArrowRight />
            <Text ml="10px">Property Address: &nbsp;{property?.address}</Text>
          </Flex>
          <Flex alignItems="center" w="50%">
            <AiOutlineArrowRight />
            <Text ml="10px">
              Property Description: &nbsp;{property?.description}
            </Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          h="40px"
          borderBottom="1px"
          borderBottomColor="#E5E5E5"
        >
          <Flex alignItems="center" w="50%">
            <AiOutlineArrowRight />
            <Text ml="10px">Bathroom: &nbsp;{property?.bathroom}</Text>
          </Flex>
          <Flex alignItems="center" w="50%">
            <AiOutlineArrowRight />
            <Text ml="10px">Bedroom: &nbsp;{property?.bedroom}</Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          h="40px"
          borderBottom="1px"
          borderBottomColor="#E5E5E5"
        >
          <Flex alignItems="center" w="50%">
            <AiOutlineArrowRight />
            <Text ml="10px">Kitchen: &nbsp;{property?.kitchen}</Text>
          </Flex>
          <Flex alignItems="center" w="50%">
            <AiOutlineArrowRight />
            <Text ml="10px">Toilet: &nbsp;{property?.toilet}</Text>
          </Flex>
        </Flex>
        <Flex
          justifyContent="space-between"
          h="40px"
          borderBottom="1px"
          borderBottomColor="#E5E5E5"
        >
          <Flex alignItems="center" w="50%">
            <AiOutlineArrowRight />
            <Text ml="10px">Sitting Room: &nbsp;{property?.sittingRoom}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PropertyDetails;
