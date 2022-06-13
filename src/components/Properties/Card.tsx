import * as React from "react";
import { Flex, Image, Icon, Text, Tooltip } from "@chakra-ui/react";
import { Property } from "interfaces/property";
import { GoLocation, GoPerson } from "react-icons/go";
import { FaBed, FaShower, FaToilet, FaChair } from "react-icons/fa";
import { MdKitchen } from "react-icons/md";
import truncate from "truncate";
import NoImage from "../../assets/images/no-image.png";
import { RoutesFunctions } from "navigation/routes";
import { useNavigate } from "react-router-dom";

export const Card: React.FC<{
  property: Property;
}> = ({ property }) => {

const navigate = useNavigate();

  const handleClick = () => {
    navigate(RoutesFunctions.singleProperty(property._id));
  }
  return (
    <Flex
      h="370px"
      p="10px"
      bg="#FFFFFF"
      flexDirection="column"
      fontSize="16px"
      color="#02055A"
      boxShadow="0px 8px 16px rgba(96, 97, 112, 0.16)"
      cursor="pointer"
      onClick={handleClick}
    >
      <Image
        src={property?.images?.[0]?.path || NoImage}
        alt={property?.images?.[0]?.originalname}
        w="100%"
        h="250px"
        mb="10px"
      />
      <Flex
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        mb="5px"
      >
        <Flex alignItems="center">
          <Icon color="#02055A" as={GoLocation} />
          <Tooltip label={property?.address}>
            <Text ml="5px" isTruncated>
              {truncate(`${property?.address}`, 20)}
            </Text>
          </Tooltip>
        </Flex>
        <Flex alignItems="center">
          <Icon color="#02055A" as={GoPerson} />
          <Text ml="5px">{property?.propertyOwner}</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" mb="5px">
        <Flex>
          <Text fontWeight="bold">Type:</Text>
          <Text>&nbsp;{property?.type}</Text>
        </Flex>
        <Flex>
          <Text fontWeight="bold" mr="3px">
            Desc:
          </Text>
          <Tooltip label={property?.description}>
            <Text isTruncated>{truncate(`${property?.description}`, 12)}</Text>
          </Tooltip>
        </Flex>
      </Flex>
      <Flex w="100%" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Icon color="#02055A" as={FaShower} />
          <Text ml="5px">{property?.bathroom}</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon color="#02055A" as={FaBed} />
          <Text ml="5px">{property?.bedroom}</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon color="#02055A" as={MdKitchen} />
          <Text ml="5px">{property?.kitchen}</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon color="#02055A" as={FaToilet} />
          <Text ml="5px">{property?.toilet}</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon color="#02055A" as={FaChair} />
          <Text ml="5px">{property?.sittingRoom}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Card;
