import * as React from "react";
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export const Search: React.FC = () => {
  return (
    <Flex>
      <InputGroup>
        <InputRightElement
          pointerEvents="none"
          children={<FiSearch color="gray.300" />}
        />
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>
    </Flex>
  );
};

export default Search;
