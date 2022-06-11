import * as React from "react";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";

export const Search: React.FC = () => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      mt="68px"
      mb="88px"
      alignItems="center"
    >
      <InputGroup w="600px" mr="20px">
        <InputRightElement
          mr="8px"
          mt="4px"
          pointerEvents="none"
          children={<FiSearch color="gray.300" />}
        />
        <Input
          bg="#fff"
          borderRadius="full"
          type="text"
          placeholder="Search by address or location"
          boxShadow="0px 8px 16px rgba(96, 97, 112, 0.16)"
          h="48px"
        />
      </InputGroup>
      <Menu>
        <MenuButton
          as={Button}
          h="48px"
          bg="#fff"
          rightIcon={<BsFilter />}
          boxShadow="0px 8px 16px rgba(96, 97, 112, 0.16)"
          borderRadius="full"
        >
          Filter by
        </MenuButton>
        <MenuList>
          <MenuItem>No of bathrooms</MenuItem>
          <MenuItem>No of bedrooms</MenuItem>
          <MenuItem>Owner</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Search;
