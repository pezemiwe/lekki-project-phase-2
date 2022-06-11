import * as React from "react";
import { Flex, Text, Icon, Divider } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <>
      <Flex w="100%" justifyContent="space-between" mb="5px">
        <Text fontSize="24px">Properties</Text>
      </Flex>
      <Divider h="1px" bg="#E5E5E5" mb="10px" />
    </>
  );
};

export default Header;
