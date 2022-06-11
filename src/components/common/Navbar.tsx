import { Avatar, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Navbar: React.FC = () => {
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
          <Avatar size="xs" mr="5px"/>
          <Text fontWeight="600">User</Text>
        </Flex>
        <Button fontSize="10px" h="30px" bg="#F05E15">
          Add Property
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
