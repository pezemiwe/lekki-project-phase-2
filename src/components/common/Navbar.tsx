import { Avatar, Button, Flex, Link, Text } from "@chakra-ui/react";
import { ROUTES } from "navigation/routes";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.form);
  };
  return (
    <Flex
      w="100%"
      h="60px"
      color="#fff"
      bg="#02055A"
      alignItems="center"
      px="50px"
      justifyContent="space-between"
    >
      <Link
        href="#"
        _hover={{ color: "#FFF", textDecoration: "none" }}
        _focus={{ outline: "none", border: "none" }}
        fontWeight="700"
      >
        Lekki Homes
      </Link>
      <Flex fontSize="12px" alignItems="center">
        <Flex mr="20px" alignItems="center">
          <Text mr="5px">Welcome,</Text>
          <Avatar size="xs" mr="5px" />
          <Text fontWeight="600">User</Text>
        </Flex>
        <Button fontSize="10px" h="30px" bg="#F05E15" onClick={handleClick}>
          Add Property
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
